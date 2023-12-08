import { useState, createContext, useEffect, useContext } from "react"
import { CheckProfile } from "../Components/API/ProfileAPI"
import { CookieContext } from "./CookieContext"
import { GetCurrentLocation } from "../Components/API/LocationAPI"

export const SidebarContext = createContext()
export const SidebarProvider = ({ children }) => {
    const { cookies } = useContext(CookieContext)
    const [profile, setProfile] = useState({})
    const email = cookies['TinderEmail']
    const [Long, setLong] = useState()
    const [Lat, setLat] = useState()
    const [LocationData, setLocationData] = useState()
    const [LikesTabOpen, setLikesTabOpen] = useState(false)
    const [DistancePreference, setDistancePreference] = useState(80)
    const [ageRange, setAgeRange] = useState([18,32]);
    useEffect(() => {
      const CheckingProfile = async () => {
        try {
          const res = await CheckProfile({ email });
          if (res && res.data.Profile) {
            setProfile(res.data.Profile);
            if (res.data.Profile.Location) {
              setLong(res.data.Profile.Location.Longtitude);
              setLat(res.data.Profile.Location.Latitude);
            }
          }
        } catch (error) {
          console.error('Error checking profile:', error);
        }
      };
  
      CheckingProfile();
    }, [email, setProfile, setLong, setLat]);
  

  
    useEffect(() => {
      const Location = async () => {
        try {
          const res = await GetCurrentLocation({ Long, Lat });
          if (res) {
            setLocationData(res);
          }
        } catch (error) {
          console.error('Error fetching location:', error);
        }
      };
  
      Location();
    }, [Long, Lat, setLocationData]);

    const [tinderOpen, setTinderOpen] = useState(true)
    const [tinderComponentOpen, setTinderComponentOpen] = useState(false)
    const [profileComponentOpen, setProfileComponentOpen] = useState(true)
    const [userOpen, setUserOpen] = useState(false)
    const [preferredLanguageOpen, setPreferredLanguageOpen] = useState(false)
    return (
        <SidebarContext.Provider value={{
             tinderOpen, setTinderOpen, tinderComponentOpen, 
             setTinderComponentOpen, profileComponentOpen, setProfileComponentOpen, 
             userOpen, setUserOpen, preferredLanguageOpen, setPreferredLanguageOpen, 
             profile, LocationData, LikesTabOpen, setLikesTabOpen, DistancePreference, 
             setDistancePreference, ageRange, setAgeRange
              }} >
            {children}
        </SidebarContext.Provider>
    )
}