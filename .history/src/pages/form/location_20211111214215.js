import React from 'react'

function Location() {
    return (
        <div>
            
            <form>
            <div class="input-cnt">
          <input placeholder="country" type="country" autoComplete="true"  name="name" 
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="email" type="text" autoComplete="true"  name="email"  
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="password" type="text" autoComplete="true" name="password" 
         
          required />
          </div>
        </form>
        </div>
    )
}

export default Location
