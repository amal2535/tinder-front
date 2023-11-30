import React, { useEffect, useContext, useState } from "react"
import { isAuthenticated } from "../../API/AuthApi"
import { CookieContext } from "../../../Context/CookieContext"
import { useNavigate } from "react-router-dom"
import FileBase from "react-file-base64"

export default function MainTinder(){
    const { cookies, setCookie } = useContext(CookieContext)
    const TinderToken = cookies['TinderJWT']
    const navigate = useNavigate()
    useEffect(()=>{
        const CheckUser = async () => {
            const res =  await isAuthenticated({TinderToken})
            if(res?.status !== 200){
                navigate("/")
                setCookie('TinderJWT', '', 0)
            }
        }
        CheckUser()
    }, [TinderToken])
    const [data, setData] = useState({
        image: "",
      });
      const [image, setImage] = useState("");
      const handleSubmit = (e) => {
        e.preventDefault();
        setImage(data.image)
        console.log('data.image :>> ', data.image);
      };
    return(
        <div>
            <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) =>
          setData({ ...data, image: base64 })
        }
      />
      <button onClick={handleSubmit}> clickkk </button>
      <img src={image} alt="tessssssst" />
        </div>
    )
}