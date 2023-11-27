import { useState, useEffect } from "react"
import Landing from "./Components/Landing"
import Navbar from "./Components/Navbar"

function App() {

  const [theme, setTheme] = useState(null)
  
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }, [])

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="">
      <Landing />
    </div>
  )
}

export default App
