import React,{useState, useContext} from 'react'
import {  ListItem } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { SidebarContext } from '../../../Context/SideBarContext';
function valuetext(value) {
    return `${value}`;
  }

export default function TranchesAge() {

    const { ageRange, setAgeRange } = useContext(SidebarContext)
  
    const handleSliderAgeChange=(event,newValue)=>{
      setAgeRange(newValue);
    }

  return (
    <div>
        <a href="#" className="text-initial ">
            <ListItem  className='cursor-default h-24 hover:bg-inherit active:bg-inherit focus:bg-inherit  hover:text-white active:text-white focus:text-white '>
                <span  style={{ whiteSpace: 'nowrap' }} className='cursor-default'>Age Preference</span>
                <p style={{ marginLeft: 'auto' }} className='text-white text-sm opacity-50 paragrapheLimite hover:text-red-400 opacity-100'>{`${ageRange[0]} - ${ageRange[1]}`}</p>
         
            </ListItem>
                    <div>
                        <Box className="ml-3" sx={{ width: 350 }}>
                            <Slider
                                value={ageRange}
                                min={18}
                                max={100}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                color="secondary"
                                onChange={handleSliderAgeChange}

                            />
                        </Box>
                    </div>
                    <div className='flex gap-24'>
                        <span className='cursor-default text-white opacity-50 text-left w-50 ml-3 '>Only show people in this range</span>
                        <Switch color="pink" defaultChecked />
                    </div>
        </a>
    </div>
  );
}
