import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  

const TabsSideBar = () => {
    const [isMessage, setMessages] = useState('')
    const [isMatch, setMatches] = useState('')
    
    const [isRotated, setIsRotated] = useState('');
  
    const setMessagesEnabled = () => {
      setMessages('underline')
      setMatches('')
    }
    
    const setMatchesEnabled = () => {
      setMessages('')
      setMatches('underline')
      setIsRotated('rotate-[30deg]');
      setTimeout(() => {
        setIsRotated('');
      }, 400);
     
    }
    const{t}=useTranslation()

  return (  
      <Tabs>
            <TabsHeader  className=" flex bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent ",
        }}>
        
                 <Tab  key={"match"} value={"value"} className={`text-white text-lg ml-5 ${isMatch} underline-offset-8 decoration-4 decoration-pink-500 mt-5`} onClick={setMatchesEnabled}>
                     <div  >
                       {t('match')} 
                    </div>
                   
                 </Tab>
                 <Tab  key={"msg"} value={"value1"} className={` text-white text-lg ml-5 ${isMessage} underline-offset-8 decoration-4 decoration-pink-500 mt-5`} onClick={setMessagesEnabled}>
                     <div>
                       {t('msg')} 
                      </div>
                    </Tab>
            </TabsHeader>
            <TabsBody style={{zIndex: 0}}>
                <TabPanel key={"match"} value={"value"}>

                <div className="flex flex-col justify-center items-center mt-9" > 
                    <div className={`h-52 w-32  bg-gradient-to-tr from-red-400 to-pink-500 rounded-lg shadow1 ${isRotated} ? 'rotate-[30deg]' : '' `}>
                    </div>
                    <div className='cursor-default mt-10 justify-content-center items-center text-center'>
                      <h1 className=" text-white text-2xl font-bold">
                         {t('startmatching')} 
                      </h1>
                       <p className="text-white opacity-75 font-light mt-3">
                       {t('textmatch')} 
                       </p>
                    </div>
                </div>

                   </TabPanel>

                 <TabPanel key={"msg"} value={"value1"}>
                      <div className="flex flex-col justify-center items-center">

                      <iframe src="https://lottie.host/embed/cb938baf-01e7-4649-ac44-062630fb66cb/Z8DkbPVGaF.json" className="w-96 h-64"></iframe>
                      <div className='cursor-default	mt-10 justify-content-center items-center text-center'>
                           <h1 className="text-white text-2xl font-bold ">
                           {t('sayhello')} 
                           </h1>
                           <p className="text-white opacity-75  font-light mt-3">
                           {t('textmsg')} 
                          </p>

                        </div>
                      </div>

                 </TabPanel>
            </TabsBody>
        </Tabs>
    
  )
}

export default TabsSideBar
