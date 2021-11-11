
export default function Signup({formData, setFormData}){

 

    return(
      <div>
        <br></br>
        <br></br>
        <br></br>
     
        <form>
        <div class="input-cnt">
          <input placeholder="email" type="email" autoComplete="true"  name="email" value={formData.email} 
         onChange={(event) => setFormData({})}
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="password" type="password" autoComplete="true" name="password" 
         
          required />
          </div>
        </form>
        </div>
  );}