import React from 'react'

function Location() {
    return (
        <div>
            <h1>Location</h1>
            <form>
          <input placeholder="" type="name" autoComplete="true"  name="name" 
         
          required />
          <input placeholder="email" type="email" autoComplete="true"  name="email"  
         
          required />
          <input placeholder="password" type="password" autoComplete="true" name="password" 
         
          required />
          
        </form>
        </div>
    )
}

export default Location
