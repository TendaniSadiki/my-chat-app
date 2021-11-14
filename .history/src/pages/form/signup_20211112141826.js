
export default function Signup({formData, setFormData}){

 

    return(
      <div>
        <br></br>
        <br></br>
        <br></br>
     
        <form>
        <div class="input-cnt">
          <input placeholder="email" type="email" autoComplete="true"  name="email" value={formData.email} 
         onChange={(event) => setFormData({...formData, email: event.target.value})} 
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