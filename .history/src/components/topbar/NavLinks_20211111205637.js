import "./topbar.css";
import {NavLink} from 'react-router-dom'
import {CgCloud, CgHome} from "react-icons/cg";
import {CgUserlane} from "react-icons/cg";
import {CgBell} from "react-icons/cg";
import {CgToolbox} from "react-icons/cg";
import {CgLogOff} from "react-icons/cg";

export default function NavLinks(props){
    return(
            <div className="linksContainer">
                    
            <NavLink to="/home" activeStyle={{color: 'black'}} exact ><span><i><CgHome/>Home</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/profile" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i ><CgUserlane/>Profile</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/chat" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgBell/>Chats</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/weather" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgCloud />Weather</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/messages" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgToolbox />Settings</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/signin" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span className="signout"><i><CgLogOff />Log Out</i></span>
            </NavLink>
            </div>
    
    )}
    