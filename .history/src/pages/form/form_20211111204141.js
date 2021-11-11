import React, {useState} from 'react'
import Login from "./pages/form/signin";
import Signup from './signup';
import Personalinfo from './personal'
import Location from './location'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
function Form() {
    const [page,setPage] = useState(0);
    const FormTitles = ["Sign Up", "My Personal Info", "Location" ];
    const routingform =(<R <Route path="/signin" exact component={Login}>
    <Login/>
  </Route>);
    const pageDisplay = () =>{
        if ( page === 0){
            return <Signup/>
        }
        else if (page === 1){
            return <Personalinfo/>
        }
        else {
            return <Location/>
        }
    };
    return (
        
        <div className="form">
            <div className="progressbar"></div>
            <div className="formContainer">
            <br></br>
           <div className="Header" >
           <h1>{FormTitles[page]}</h1> 
           </div>
           <div className="body">
            {pageDisplay()}
           </div> 
           <div className="footer">
               <button disabled={page === 0} onClick={() =>{setPage((currPage)=>currPage - 1);}}  >Prev</button>
               <button disabled={page === FormTitles.length -1} onClick={() =>{setPage((currPage)=>currPage + 1);}}  >Next</button>
           </div>
           </div>
        </div>
    )
}

export default Form
