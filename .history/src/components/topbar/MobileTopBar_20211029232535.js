import "./topbar.css";
import { useState } from "react";
import {CgMenuRound} from "react-icons/cg";
import {CgClose} from "react-icons/cg";
import NavLinks from "./NavLinks";

export default function MobileTopBar(){
    const [open, setOpen] = useState(false);
    const openMenu = <CgMenuRound className='menubtn' onClick={() => setOpen(!open)}/>
    const closeMenu = <CgClose className="closebtn" onClick={() => setOpen(!open)}/>
    const closeMobileMenu = () => setOpen(false);

    return(
        <nav className='MobileTopBar'>
        {open ? closeMenu: openMenu}    
        { open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        <div className="titleContent">
                <h3>Title</h3>
            </div>
        </nav>
            
      
        )}