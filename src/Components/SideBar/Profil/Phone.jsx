import React from 'react';
import { List, ListItem} from "@material-tailwind/react";
import { Divider } from '@mui/material';
import { TiTick } from "react-icons/ti";

function Phone(props) {
    return (
        <div>
            <div className='cursor-default text-white opacity-50 font-bold ml-4 transform translate-y-10'> Phone Number</div>
            <div className="mx-2 w-96 bg-[rgb(20,20,28)] transform translate-y-10">
                <List className='text-white mt-9 '>
                <Divider color="#757575" className='w-90'/>

                <a href="#" className="text-initial flex  ">
                    <ListItem className=' h-10 ml-4  hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white cursor-default'>
                        <span  style={{ whiteSpace: 'nowrap' }} >21692144354</span>
                        <TiTick style={{ marginLeft: 'auto' }} color='#660099' size={"24px"}/>
                    </ListItem>
                </a>
                <Divider color="#757575" className='w-90'/>
                </List>
            
            </div>
                <p className='ml-4 text-white opacity-75 mt-16'>
                    Verified phone number
                </p>
            <div className="mx-2 w-96 bg-[rgb(20,20,28)] transform translate-y-10">
                <List className='text-white '>
                <Divider color="#757575" className='w-90'/>

                <a href="#" className="text-initial flex  ">
                    <ListItem className=' h-10 ml-4  hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white'>
                        <span  style={{ whiteSpace: 'nowrap' }} className='text-red-500' >Update my phone number</span>
                    </ListItem>
                </a>
                <Divider color="#757575" className='w-90'/>
                </List>
            
            </div>
                         
        </div>
    );
}

export default Phone;