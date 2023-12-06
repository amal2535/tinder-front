import React, { useState,useMemo,useRef } from 'react';
import TinderCard from 'react-tinder-card';
import CloseIcon from '@mui/icons-material//Close';
import StarRateIcon from '@mui/icons-material//StarRate';
import FavoriteIcon from '@mui/icons-material//Favorite';
import { IconButton } from '@mui/material';
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const db = [

    {
      name: 'Monica Hall',
      age:'22',
      city:'Sousse',
      km:'2',
      url: 'https://media.licdn.com/dms/image/C4D03AQFfKqg8aOcUhw/profile-displayphoto-shrink_800_800/0/1615475792706?e=2147483647&v=beta&t=CntKn544MPfBKw8td5CpCgMW6LQejM8-ilgYBqS92Ao'
    },
    {
      name: 'Mouhib Amal',
      age:'25',
      city:'Tunis',
      km:'30',
      url: 'https://media.licdn.com/dms/image/C4E03AQFb0tKf4LAcvg/profile-displayphoto-shrink_800_800/0/1660037686600?e=2147483647&v=beta&t=sUDR5qSUXlp5RiEezsgyHXl7rQGGXdj25kAA-JL2we4'
    },
    {
      name: 'Mouhamed Naffeti',
      age:'25',
      city:'Gabes',
      km:'122',
      url: 'https://media.licdn.com/dms/image/D4E03AQHlm8G1kA5JzA/profile-displayphoto-shrink_400_400/0/1690099810829?e=1701907200&v=beta&t=bsxXdh0ltFY5Zvff0PE9vH6NUSem1KkgWb3GemKAaNQ'
    }
  ]
  const slides = [
    'https://media.licdn.com/dms/image/D4E03AQHlm8G1kA5JzA/profile-displayphoto-shrink_400_400/0/1690099810829?e=1701907200&v=beta&t=bsxXdh0ltFY5Zvff0PE9vH6NUSem1KkgWb3GemKAaNQ',
    'https://media.licdn.com/dms/image/C4E03AQFb0tKf4LAcvg/profile-displayphoto-shrink_800_800/0/1660037686600?e=2147483647&v=beta&t=sUDR5qSUXlp5RiEezsgyHXl7rQGGXdj25kAA-JL2we4',
    'https://media.licdn.com/dms/image/D4E03AQHlm8G1kA5JzA/profile-displayphoto-shrink_400_400/0/1690099810829?e=1701907200&v=beta&t=bsxXdh0ltFY5Zvff0PE9vH6NUSem1KkgWb3GemKAaNQ',
    'https://media.licdn.com/dms/image/C4E03AQFb0tKf4LAcvg/profile-displayphoto-shrink_800_800/0/1660037686600?e=2147483647&v=beta&t=sUDR5qSUXlp5RiEezsgyHXl7rQGGXdj25kAA-JL2we4',
    "https://media.licdn.com/dms/image/C4E03AQFb0tKf4LAcvg/profile-displayphoto-shrink_800_800/0/1660037686600?e=2147483647&v=beta&t=sUDR5qSUXlp5RiEezsgyHXl7rQGGXdj25kAA-JL2we4",
    "https://wallpaperaccess.com/full/809523.jpg",
  ]
  
  
function Cardtinder() {
        let [current, setCurrent] = useState(0);
        const [currentIndex, setCurrentIndex] = useState(db.length - 1)
        const [lastDirection, setLastDirection] = useState()
        const currentIndexRef = useRef(currentIndex)
      
        const childRefs = useMemo(
          () =>
            Array(db.length)
              .fill(0)
              .map((i) => React.createRef()),
          []
        )
      
        const updateCurrentIndex = (val) => {
          setCurrentIndex(val)
          currentIndexRef.current = val
        }
            
        const canSwipe = currentIndex >= 0
      
        // set last direction and decrease current index
        const swiped = (direction, nameToDelete, index) => {
          setLastDirection(direction)
          updateCurrentIndex(index - 1)
        }
      
        const outOfFrame = (name, idx) => {
          currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        }
      
        const swipe = async (dir) => {
          if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
          }
        }
        
    return (
        <div>
  

        <div className='self-center shadow-md mr-96 shadow-pink-500/50 card-container'>
            {
                db.map((profile, index) =>(

                    <TinderCard ref={childRefs[index]} className='swipe' key={profile.name} onSwipe={(dir) => swiped(dir, profile.name,index)} onCardLeftScreen={() => outOfFrame(profile.name,index)} preventSwipe={'down'}>
                      
                      <div className="relative overflow-hidden">
                       
                        <div
                          className={`flex transition ease-out duration-40 card`}
                          style={{
                            transform: `translateX(-${current * 100}%)`,
                          }}
                        >
                          {slides.map((s) => {
                                       
                             return (
                              <img src={s} alt="" className="object-cover rounded-xl -z-50" />
                              
                          ) })}
                          </div>
                          
                            <div className='text-white active '>
                                <FaCircle color='green' />
                                <h3>Recently Active</h3>
                            </div> 

                            <div className='text-white info-user1'>
                            <h3 style={{fontWeight:'bolder'}} >{profile.name}</h3>
                            <h2>{profile.age}</h2>
                            
                            </div>
                            <div className='text-white info-user2 '>
                                <BsHouseDoor />
                                <h5>Lives in {profile.city}</h5>
                            </div>
                            <div className='text-white info-user3 '>
                               <CiLocationOn />
                                <h5>{profile.km} Kilometers away</h5>
                            </div>
                            
                            <IoInformationCircle className='info' color='#660099' size={'32px'}/>
                            

      
                </div>  
                
                <div className="absolute top-0 z-50 flex justify-center w-full gap-3 py-4">
                                         {slides.map((s, i) => {
                                           return (
                                             <div
                                               onClick={() => {
                                                 setCurrent(i);
                                               }}
                                               key={"circle" + i}
                                               className={`squared w-16 h-1 rounded-sm cursor-pointer -z-50  ${
                                                 i === current ? "bg-white" : "bg-gray-500"
                                               }`}
                                              ></div>   );})}
                                      </div>
                 </TinderCard>
               
                 ))
                 }
          
            
        <div className='swipe__Button'>
           
           <IconButton className='swipeButton__left'  onClick={() => {swipe('left'); setCurrent(0)}} >
               <CloseIcon fontSize='large' />
           </IconButton>
           <IconButton className='swipeButton__star' onClick={() => {swipe('up'); setCurrent(0)}}>
               <StarRateIcon fontSize='large' />
           </IconButton>
           <IconButton className='swipeButton__right' onClick={() => {swipe('right'); setCurrent(0)}}>
               <FavoriteIcon fontSize='large'  />
           </IconButton>
          
       </div>
        </div>
        </div>
    );
}

export default Cardtinder