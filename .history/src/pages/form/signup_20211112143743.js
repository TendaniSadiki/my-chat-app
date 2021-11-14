import { useRef } from "react";
import {getAuth} from '../../firebase';
export default function Signup({formData, setFormData}){

  const email =useRef();
  const password =useRef();
  
  const country =useRef();
  const city =useRef();
  const town =useRef();
 async function handleSignup(){
     await s(email.current.value, password.current.value)
 }

    return(
      <div>
        <br></br>
        <br></br>
        <br></br>
     
        <form>
        <div class="input-cnt">
          <input placeholder="email" type="email" autoComplete="true"  name="email" value={formData.email} 
         onChange={(event) => setFormData({...formData, email: event.target.value})} ref={email}
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="password" type="password" autoComplete="true" name="password" value={formData.password} 
         onChange={(event) => setFormData({...formData, password: event.target.value})} ref={password}
         
          required />
          </div>
        </form>
        </div>
  );}