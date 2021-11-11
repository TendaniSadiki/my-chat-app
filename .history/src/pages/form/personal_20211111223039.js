import React from 'react'

function personal({formData, setFormData) {
    return (
        <div>
            
            <form>
            <div class="input-cnt">
          <input placeholder="First Name" type="text" autoComplete="true"  name="fname"  
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Surname" type="text" autoComplete="true" name="surname" 
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Username" type="text" autoComplete="true"  name="name" 
         
         required />
         </div>
          
        </form>
        </div>
    )
}

export default personal
