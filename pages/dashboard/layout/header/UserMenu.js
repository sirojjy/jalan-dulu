// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useRef, useState } from "react";
import OutsideClick from "../../../../components/utils/outsideClick";

const UserMenu = () => {
  const [userMenuStatus, setUserMenuStatus] = useState(false) ;
  const buttonRef = useRef(null);
  const buttonOutsideClick = OutsideClick(buttonRef);

  const userMenuhandle =()=>{
    setUserMenuStatus(!userMenuStatus)
  }  

  useEffect(()=>{
    if(buttonOutsideClick){
      setUserMenuStatus(false)
    }
  },[buttonOutsideClick])
  
  //console.log("userbutton", buttonOutsideClick)
  return (
    <button className="relative inline-flex items-center p-2 rounded-lg hover:bg-gray-100 focus:bg-gray-100" onClick={userMenuhandle} ref={buttonRef}>
      <span className="sr-only">User Menu</span>
      <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
        <span className="font-semibold">Grace Simmons</span>
        <span className="text-sm text-gray-600">Lecturer</span>
      </div>
      <span className="w-12 h-12 ml-2 mr-2 overflow-hidden bg-gray-100 rounded-full sm:ml-3">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="user profile photo"
          className="object-cover w-full h-full"
        />
      </span>
       
       {userMenuStatus &&
        <div className='absolute right-0 w-full px-2 py-1 space-x-2 sm:-bottom-16 bg-slate-500 text-yellow-50 -bottom-28'>
            <a className='block hover:bg-gray-50 hover:text-black'>user Profile</a>
            <a className='block hover:bg-gray-50 hover:text-black'>user setting</a>
        </div>
       } 
      
      
      {/* {userMenuStatus ? 
      <ChevronDownIcon className="hidden w-6 h-6 text-gray-300 sm:block"/> :
      <ChevronUpIcon className="hidden w-6 h-6 text-gray-300 sm:block"/>
      } */}
    </button>
  );
};

export default UserMenu;
