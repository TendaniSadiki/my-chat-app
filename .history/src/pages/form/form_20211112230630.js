import React, {useState} from 'react'
import Signup from './signup';

import './form.css'
import Personalinfo from './personal'
import Location from './location'
import firebase from 'firebase'
import {Redirect, withRouter} from 'react-dom' ;

function Form() {
    
    const [page,setPage] = useState(0);

    const FormTitles = ["Sign Up", "My Personal Info", "Location" ];
    
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        username:'',
        firstnane:'',
        surname:'',
        country:'',
        city:'',
        town:'',

    });
   

    const pageDisplay = () =>{
        if ( page === 0){
            return <Signup formData={formData} setFormData={setFormData} />
        }
        else if (page === 1){
            return <Personalinfo formData={formData} setFormData={setFormData} />
        }
        else {
            return <Location formData={formData} setFormData={setFormData} />
        }
    };
    return (
        <div>
        <br></br>
            <br></br>
            <br></br>
        <div className="form">
            <button>Sign In</button>
            
            <div className="formContainer">
            <br></br>
            <div className="progressbar"><div style={{width: page ===0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}} ></div></div>
           <div className="Header" >
           <h1>{FormTitles[page]}</h1> 
           </div>
           <div className="body">
            {pageDisplay()}
           </div> 
           <br></br>
           <div className="footer">
               <button disabled={page === 0} onClick={() =>{setPage((currPage)=>currPage - 1);}} className="formBtn" >Prev</button>
               <button  onClick={() =>{
                    if (page === FormTitles.length -1){
                            console.log(formData)
                        
                        }else{
                    setPage((currPage)=>currPage + 1);}}} className="formBtn" >{page === FormTitles.length -1 ? "Submit":"Next"}</button>
           </div>
           </div>
        </div>
        </div>
    )
}

export default withRouter(Form);
