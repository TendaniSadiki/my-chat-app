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
          <input placeholder="email" type="email" autoComplete="true"  name="email"  
         
          required />
          </div>
          
          <input placeholder="password" type="password" autoComplete="true" name="password" 
         
          required />
          
        </form>
        </div>
    )
}

export default Location
