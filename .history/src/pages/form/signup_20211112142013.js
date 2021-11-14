import 
export default function Signup({formData, setFormData}){

  const email =useRef();
  const password =useRef();
  const username =useRef();
  const firstnane =useRef();
  const surname =useRef();
  const country =useRef();
  const city =useRef();
  const town =useRef();
 async function handleSignup(){
     await signup(email.current.value, email.current.value)
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
         onChange={(event) => setFormData({...formData, password: event.target.value})} 
         
          required />
          </div>
        </form>
        </div>
  );}