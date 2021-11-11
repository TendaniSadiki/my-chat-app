import React from 'react'

function personal() {
    return (
        <div>
            <h1>Personal Info</h1>
            <form>
          <input placeholder="Username" type="name" autoComplete="true"  name="name" 
         
          required />
          <input placeholder="" type="email" autoComplete="true"  name="email"  
         
          required />
          <input placeholder="password" type="password" autoComplete="true" name="password" 
         
          required />
          
        </form>
        </div>
    )
}

export default personal
