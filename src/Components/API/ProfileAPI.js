import axios from "axios";

const BASE_URL="http://localhost:5000"


export const CheckProfile = async ({email}) => {
    let result
    try{
        result =  await axios.get(`${BASE_URL}/api/profile?email=${email}`)
        return result
    }catch(err){
        console.log(err)
    }
}