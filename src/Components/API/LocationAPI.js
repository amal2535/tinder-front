import axios from "axios"

const API_KEY = "fdc9bc70db5944cd854bf73c7f4664ed"
export const GetCurrentLocation = async ({ Long, Lat }) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${Lat}+${Long}&key=${API_KEY}`;
    try{
        const res = await axios.get(url)
        return res
    }catch(err){
        console.log(err)
    }
}