import React from 'react'

function Location() {
    return (
        <div>
            
            <form>
            <div class="input-cnt">
          <input placeholder="Country" type="country" autoComplete="true"  name="name" 
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="City" type="text" autoComplete="true"  name="e"  
         
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
