import {BrowserRouter as Link} from 'react-router-dom';


export default function Signup(){

 

    return(
      <div>
        <br></br>
        <br></br>
        <br></br>
      <Link to="/signin"><i className="fas fa-user" >
        Signin
                </i>
            </Link>
        <form>
          <input placeholder="Username" type="name" autoComplete="true"  name="name" 
         
          required />
          <input placeholder="email" type="email" autoComplete="true"  name="email"  
         
          required />
          <input placeholder="password" type="password" autoComplete="true" name="password" 
         
          required />
          
        </form>
        </div>
  );}