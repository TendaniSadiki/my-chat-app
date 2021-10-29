import "./topbar.css";
import {Link} from 'react-router-dom'
import {CgHome} from "react-icons/cg";

export default function NavLinks(props){
    return(
            <div className="linksContainer">
            <Link to="/home" onClick={() => props.isMobile && props.closeMobileMenu()}><span><CgHome className={fa-home" /><h4>Home</h4></span>
            </Link>
            <Link to="/profile" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i className="fas fa-user-circle"><h4>Profile</h4></i></span>
            </Link>
            <Link to="/chat" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i className="fas fa-users"><h4>Chat</h4></i></span>
            </Link>
            <Link to="/weather" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i className="fas fa-cloud  "><h4>Weather</h4></i></span>
            </Link>
            <Link to="/messages" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i className="fas fa-wrench"><h4>Settings</h4></i></span>
            </Link>
            <Link to="/signin" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i className="fas fa-sign-out-alt" ><h4>Log Out</h4></i></span>
            </Link>
            </div>
    
    )}
    