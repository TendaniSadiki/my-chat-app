import React from 'react'

function personal() {
    return (
        <div>
            <h1>Personal Info</h1>
            <form>
          
          <input placeholder="First Name" type="name" autoComplete="true"  name="fname"  
         
          required />
          <input placeholder="Surname" type="name" autoComplete="true" name="surname" 
         
          required />
          <input placeholder="Username" type="name" autoComplete="true"  name="name" 
         
         required />
          
        </form>
        </div>
    )
}

export default personal