import React from 'react'

function Location({formData, setFormData}) {
    return (
        <div>
            
            <form>
            <div class="input-cnt">
          <input placeholder="Country" type="country" autoComplete="true"  name="country" 
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="City" type="text" autoComplete="true"  name="city"  
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Town" type="text" autoComplete="true" name="town" 
         
          required />
          </div>
        </form>
        </div>
    )
}

export default Location
