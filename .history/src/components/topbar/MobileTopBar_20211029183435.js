import "./topbar.css";
import { useState } from "react";
import {CgMenuRound} from "react-icons/cg"

import NavLinks from "./NavLinks";
export default function MobileTopBar(){
    const [open, setOpen] = useState(false);
    const openMenu = <CgMenuRound className='fa-' onClick={() => setOpen(!open)}/>
    const closeMenu = <i className="fas fa-times" onClick={() => setOpen(!open)}></i>
    const closeMobileMenu = () => setOpen(false);

    return(
        <nav className='MobileTopBar'>
        {open ? closeMenu: openMenu}    
        { open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
            
      
        )}