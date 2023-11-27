import React from "react";

import {
    Typography,
    Avatar,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  

  export default  function Sidebar() {
       
  const data = [
    {
      label: "Matchs",
      value: "matchs",
      desc: "Your matchs will be here ",
    },
    {
      label: "Messages",
      value: "messages",
      desc: "Your messages will be here",
    }
  ];
    return (
      <div className="h-[calc(103vh-2rem)] bg-violet-950 max-w-[25rem] p-4 shadow-xl shadow-blue-gray-900/5">

      <div className="flex mt-5 ">
        <div className="flex gap-3  hover:bg-rose-500 rounded-full w-40">

        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="w-15 h-10 rounded-full" />
        <a href="#">
          <Typography className="text-white text-lg font-sans mt-2" variant="h1">
                 Mouhib
          </Typography>
          </a>
          </div>

            <div className="flex ml-20 gap-3 mt-2">
            <img src='https://i.postimg.cc/524mk6D1/application.png' border='0' alt='application' className="w-8 h-8 rounded"/>
            <img src='https://i.postimg.cc/QHNGFh65/heart-1.png' border='0' alt='heart-1' className="w-8 h-8 rounded"/>
            
                      </div>

       
        </div>


        <Tabs className="mt-10 mr-20">
      <TabsHeader className="gap-10">
        
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            <div className="flex underline decoration-solid items-center hover:bg-purple-400 rounded-full text-black text-lg mr-10">
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
      </div>
    );
  }