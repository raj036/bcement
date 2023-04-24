import React, { useState } from 'react';

import './sidebar.css';

import icon from '../images/icon.jpg';

// react icons
import { TbUsers } from 'react-icons/tb';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TiVendorMicrosoft } from 'react-icons/ti';
import { BiSitemap } from 'react-icons/bi';
import { BiUnite } from 'react-icons/bi';



import { useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    }

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div className="logocontainer">
                <img src={icon} alt="" className="logo" />
                <h2 className={closeMenu === false ? "title" : "title active"}>Bhargava cement</h2>
            </div>
            <div className="burgerContainer">
                <div className="burgerTrigger" onClick={() => { handleCloseMenu(); }}></div>
                <div className={closeMenu === false ? "burgerMenu" : "burgerMenu active"}></div>
            </div>
            <div className="contentsContainer">
                <ul>
                    <li>
                        <h3><MdOutlineDashboardCustomize size='25px' color='purple'/></h3>
                        <a href="/" className={closeMenu === false ? "list-li" : "list-li active"}>Dashboard</a>
                    </li>
                    <li>
                        <h3><MdOutlineDashboardCustomize size='25px' color='purple'/></h3>
                        <a href="/item" className={closeMenu === false ? "list-li" : "list-li active"}>Item</a>
                    </li>
                    <li>
                        <h3><MdOutlineDashboardCustomize size='25px' color='purple'/></h3>
                        <a href="/subitem" className={closeMenu === false ? "list-li" : "list-li active"}>Subitem</a>
                    </li>
                    <li>
                        <h3><BiSitemap size='25px' color='purple'/></h3>
                        <a href="/site" className={closeMenu === false ? "list-li" : "list-li active"}>Site</a>
                    </li>
                    <li>
                        <h3><BiUnite size='25px' color='purple'/></h3>
                        <a href="/unit" className={closeMenu === false ? "list-li" : "list-li active"}>Unit</a>
                    </li>
                    <li>
                        <h3><TbUsers size='25px' color='purple'/></h3>
                        <a href="/user" className={closeMenu === false ? "list-li" : "list-li active"}>User</a>
                    </li>
                    <li>
                        <h3><TiVendorMicrosoft size='25px' color='purple'/></h3>
                        <a href="/vendor" className={closeMenu === false ? "list-li" : "list-li active"}>Vendor</a>
                    </li>
                    <li>
                        <h3><MdOutlineDashboardCustomize size='25px' color='purple'/></h3>
                        <a href="/voucher" className={closeMenu === false ? "list-li" : "list-li active"}>Voucher</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;