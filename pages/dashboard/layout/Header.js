// import { MoonIcon } from '@heroicons/react/24/solid';
import React from 'react';
import LogOutButton from './header/LogOutButton';
import Notifications from './header/Notifications';
import SearchBox from './header/SearchBox';
import UserMenu from './header/UserMenu';

const Header = ({mobileNavsidebar, setMobileNavsidebar}) => {
  return (
    <header className="flex items-center h-20 px-6 bg-white sm:px-10">
        
        {/* <MoonIcon className='h-12 cursor-pointer stroke-slate-600 sm:hidden' onClick={()=>setMobileNavsidebar(!mobileNavsidebar)}/> */}
        <SearchBox />
        
        <div className="flex items-center flex-shrink-0 ml-auto">
         <UserMenu />
          <div className="pl-3 ml-3 space-x-1 border-l">
            <Notifications />
            <LogOutButton />
          </div>
        </div>
      </header>
  );
};

export default Header;