import "./style.css";

import Login from "./pages/form/signin";
import Forms from "./pages/form/form";
import Home from "./pages/home/home";
import Profile from './pages/profile/profile';
import Search from './pages/search/search';
import Chat from './pages/people/chat/chat';
import Messages from './pages/people/messages/messages';
import Videocall from './pages/videocall/videocall';
import Weather from './pages/weather/weather';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import {AuthContext} from './context/authContext';
import Auth from "./components/Auth/auth";

/*App */
function App() {
const  {loading, error, currentUser} = AuthContext();

const routing = (

    <div>
      {error && <p className="error" ></p>}
      {loading ? <h2>Loading...</h2> : <>{currentUser ? <Home/> : <Auth/> }</> }
    <Router>
      <Topbar/>

        <Switch>
        <Route path="/form" exact component={Forms}>
            <Forms/>
          </Route>
            <Route path="/home" exact component={Home}>
            <Home/>
          </Route>
          <Route path="/signin" exact component={Login}>
            <Login/>
          </Route>
          <Route path="/search" exact component={Search}>
            <Search/>
          </Route>
           <Route path="/Profile" exact component={Profile}>
            <Profile/>
          </Route>
          <Route path="/chat" exact component={Chat}>
            <Chat/>
          </Route>
          <Route path="/messages" exact component={Messages}>
            <Messages/>
          </Route>
          <Route path="/videocall" exact component={Videocall}>
            <Videocall/>
          </Route>
          <Route path="/weather" exact component={Weather}>
            <Weather/>
          </Route>
        </Switch>
    </Router>
    
    </div>
    
);
return (routing)
}

export default App;
