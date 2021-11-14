import "./signin.css"


export default function Login(){
 
  return(
    <div className='Mobile'>
      <br></br>
        <br></br>
        <br></br>
    
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

    </div>
);}


