import "./topbar.css";
import {Link} from 'react-router-dom'
import {CgCloud, CgHome} from "react-icons/cg";
import {CgUserlane} from "react-icons/cg";
import {CgBell} from "react-icons/cg";
import {CgToolbox} from "react-icons/cg";
import {CgLogOff} from "react-icons/cg";

export default function NavLinks(props){
    return(
            <div className="linksContainer">
                    <div className></div>
            <Link to="/home" onClick={() => props.isMobile && props.closeMobileMenu()}><span><i><CgHome/>Home</i></span>
            </Link>
            <br></br>
            <Link to="/profile" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i ><CgUserlane/>Profile</i></span>
            </Link>
            <br></br>
            <Link to="/chat" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgBell/>Chats</i></span>
            </Link>
            <br></br>
            <Link to="/weather" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgCloud />Weather</i></span>
            </Link>
            <br></br>
            <Link to="/messages" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgToolbox />Settings</i></span>
            </Link>
            <br></br>
            <Link to="/signin" onClick={() => props.isMobile && props.closeMobileMenu()} ><span className="signout"><i><CgLogOff />Log Out</i></span>
            </Link>
            </div>
    
    )}
    