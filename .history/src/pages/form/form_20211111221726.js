import React, {useState} from 'react'
import Signup from './signup';
import './form.css'
import Personalinfo from './personal'
import Location from './location'

function Form() {
    const [page,setPage] = useState(0);
    const FormTitles = ["Sign Up", "My Personal Info", "Location" ];
    const [formData, setFormData]

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
        <div>
        <br></br>
            <br></br>
            <br></br>
        <div className="form">
            <button>Sign Up</button>
            
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
               <button disabled={page === FormTitles.length -1} onClick={() =>{setPage((currPage)=>currPage + 1);}} className="formBtn" >Next</button>
           </div>
           </div>
        </div>
        </div>
    )
}

export default Form
