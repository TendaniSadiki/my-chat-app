import React, {useState} from 'react';
import Login from '../../pages/form/signin'
import Forms from '../../pages/form/form';
function Auth() {
    const [index, setIndex] = useState(false);
    const toggleIndex = ()=>{
        setIndex((prevState) =>!prevState);
    };
    return (
        <div>
            {!index ? <Forms/> : <Login/> }
            <p onClick={toggleIndex}>
            {!index ? "New use? Click here":"Already have an account? Click here"}    
            </p>      
        </div>
    )
}

export default Auth
