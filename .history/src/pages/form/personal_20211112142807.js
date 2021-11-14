import React from 'react'
import { useRef } from "react";
function personal({formData, setFormData}) {
    const username =useRef();
    const firstnane =useRef();
    const surname =useRef();

    return (
        <div>
            
            <form>
            <div class="input-cnt">
          <input placeholder="First Name" type="text" autoComplete="true"  name="fname"   value={formData.firstname} 
         onChange={(event) => setFormData({...formData, firstname: event.target.value})} usew
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Surname" type="text" autoComplete="true" name="surname" value={formData.surname} 
         onChange={(event) => setFormData({...formData, surname: event.target.value})}
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Username" type="text" autoComplete="true"  name="name" value={formData.username} 
         onChange={(event) => setFormData({...formData, username: event.target.value})}
         
         required />
         </div>
          
        </form>
        </div>
    )
}

export default personal
