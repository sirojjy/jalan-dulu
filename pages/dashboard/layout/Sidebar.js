import React, { useRef } from 'react';
import OutsideClick from '../../../components/utils/outsideClick';
import Nav from './sidebar/Nav';
import SettingButton from './sidebar/SettingButton';
import Logo from './sidebar/logo';

const Sidebar = ({mobileNavsidebar}) => {
    const sidebarRef = useRef(null);
    const sidebarOutsideClick = OutsideClick(sidebarRef);

    //console.log("sidebar Ref", sidebarRef)
    //console.log("sidebar Ref sidebarOutsideClick", sidebarOutsideClick)
    return (
        <aside className={`sm:flex sm:flex-col z-50`} ref={sidebarRef}>
            <Logo />
            
            <div className="flex flex-col justify-between flex-grow text-gray-500 bg-gray-800">
                <Nav sidebarOutsideClick={sidebarOutsideClick} />
                <SettingButton />
            </div>
        </aside>
    );
};

export default Sidebar;