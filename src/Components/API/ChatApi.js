import axios from "axios"

const BASE_URL = 'http://localhost:5000/api'

export const GetMyChats = async({ email }) => {
    try{
        const MyChats = await axios.get(`${BASE_URL}/chat/${email}`)
        return MyChats
    }catch(err){
        console.log(err)
    }
}

