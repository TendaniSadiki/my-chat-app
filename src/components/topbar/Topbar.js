
import "./topbar.css";
import Navigation from "./Navigation";
import MobileTopBar from './MobileTopBar';
export default function Topbar(){
    
    return(
      <nav className='Topbar'>
           <Navigation/>,
           <MobileTopBar/>
      </nav>
    );
}