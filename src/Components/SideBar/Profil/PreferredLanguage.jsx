import React,{useState} from 'react';
import { List, ListItem ,Checkbox,ListItemSuffix} from "@material-tailwind/react";
import { Divider } from '@mui/material';


export default function PreferredLanguage() {
       
    const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (language) => {
    if (selectedItems.includes(language)) {
      setSelectedItems(selectedItems.filter(item => item !== language));
    } else {
      if (selectedItems.length < 5) {
        setSelectedItems([...selectedItems, language]);
      }
    }
  };
    return (
        <div>
    <div className='ml-4 font-bold text-white opacity-50 cursor-default ' style={{ transform: "translateY(30px)" }}>Sélectionner une langue</div>
    <div className=" mx-1 w-96 bg-[rgb(20,20,28)] " style={{ transform: "translateY(30px)" }}>
    <List className='text-white mt-9 '>
      <a href="#" className="flex text-initial ">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
            <span>Anglais</span>
            <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Anglais')}
            onChange={() => handleCheckboxChange('Anglais')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>

      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Français</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Français')}
            onChange={() => handleCheckboxChange('Français')}/>
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Arabe</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Arabe')}
            onChange={() => handleCheckboxChange('Arabe')}  />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Allemand</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Allemand')}
            onChange={() => handleCheckboxChange('Allemand')} />
            </ListItemSuffix>
        </ListItem>
      </a>

      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Espagnol</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Espagnol')}
            onChange={() => handleCheckboxChange('Espagnol')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Italien</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Italien')}
            onChange={() => handleCheckboxChange('Italien')} />
            </ListItemSuffix>
        </ListItem>
      </a>

      <Divider color="#757575" className='w-90'/>
      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Japonais</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Japonais')}
            onChange={() => handleCheckboxChange('Japonais')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>

      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Corréen</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Corréen')}
            onChange={() => handleCheckboxChange('Corréen')}  />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>

      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Turc</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Turc')}
            onChange={() => handleCheckboxChange('Turc')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      <Divider color="#757575" className='w-90'/>

      <a href="#" className="flex text-initial">
        <ListItem className='cursor-default hover:bg-inherit active:bg-inherit focus:bg-inherit hover:text-white active:text-white focus:text-white'>
          <span  style={{ whiteSpace: 'nowrap' }}>Russe</span>
          <ListItemSuffix>
                <Checkbox color="pink"  checked={selectedItems.includes('Russe')}
            onChange={() => handleCheckboxChange('Russe')} />
            </ListItemSuffix>
        </ListItem>
      </a>
      </List>
      </div>
</div>
);
}
