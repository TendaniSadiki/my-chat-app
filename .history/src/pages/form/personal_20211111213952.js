import React from 'react'

function personal() {
    return (
        <div>
            <h1>Personal Info</h1>
            <form>
            <div class="input-cnt">
          <input placeholder="First Name" type="text" autoComplete="true"  name="fname"  
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Surname" type="name" autoComplete="true" name="surname" 
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Username" type="name" autoComplete="true"  name="name" 
         
         required />
         </div>
          
        </form>
        </div>
    )
}

export default personal
