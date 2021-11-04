import "./home.css";

import {Link} from 'react-router-dom'
export default function Home(){
    return(
         
        <div className="page">
        <br></br>
        <br></br>
        <br></br>
            <h1>
            Lobby
            </h1>
            <div ClassName="searchbar">
            <Link to="/search"><i className="fas fa-search"></i>
            </Link>
            </div>
            <div id="friends">
                <br></br>
                <h3>Dashboard People</h3>
                <ul>
                    <li> <i className="fas fa-user-circle"></i>Edmond Sadiki</li>
                    <li><i className="fas fa-user-circle"></i>John Smith</li>
                    <li> <i className="fas fa-user-circle"></i>Derik Sadiki</li>
                    <li> <i className="fas fa-user-circle"></i>Leoram ispa</li>
                    <li> <i className="fas fa-user-circle"></i>Edmond Sadiki</li>
                    <li><i className="fas fa-user-circle"></i>John Smith</li>
                    <li> <i className="fas fa-user-circle"></i>Derik Sadiki</li>
                    <li> <i className="fas fa-user-circle"></i>Leoram ispa</li>
                </ul>
                
            </div>
        </div>
    );
}