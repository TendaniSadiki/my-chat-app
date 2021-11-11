import React from 'react'

function personal({formData, setFormData}) {
    return (
        <div>
            
            <form>
            <div class="input-cnt">
          <input placeholder="First Name" type="text" autoComplete="true"  name="fname"   value={formData.firstname} 
         onChange={(event) => setFormData({...formData, firstname: event.target.value})}
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Surname" type="text" autoComplete="true" name="surname" value={formData.surname} 
         onChange={(event) => setFormData({...formData, firstname: event.target.value})}
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Username" type="text" autoComplete="true"  name="name" value={formData.username} 
         onChange={(event) => setFormData({...formData, firstname: event.target.value})}
         
         required />
         </div>
          
        </form>
        </div>
    )
}

export default personal
