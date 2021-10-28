import "./topbar.css";
import { useState } from "react";

import NavLinks from "./NavLinks";
export default function MobileTopBar(){
    const [open, setOpen] = useState(false);
    const openMenu = <i className="fas fa-bars" onClick={() => setOpen(!open)}></i>
    const closeMenu = <i className="fas fa-times" onClick={() => setOpen(!open)}></i>
    const closeMobileMenu = () => setOpen(false);

    return(
        <nav className='MobileTopBar'>
        {open ? closeMenu: openMenu}    
        { open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
            
      
        )}