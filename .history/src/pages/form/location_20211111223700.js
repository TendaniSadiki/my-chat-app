import React from 'react'

function Location({formData, setFormData}) {
    return (
        <div>
            
            <form>
            <div class="input-cnt">
          <input placeholder="Country" type="country" autoComplete="true"  name="country" value={formData.country} 
         onChange={(event) => setFormData({...formData, country: event.target.value})}
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="City" type="text" autoComplete="true"  name="city"  value={formData.city} 
         onChange={(event) => setFormData({...formData, city: event.target.value})}
         
          required />
          </div>
          <div class="input-cnt">
          <input placeholder="Town" type="text" autoComplete="true" name="town" value={formData.town} 
         onChange={(event) => setFormData({...formData, town: event.target.value})} 
         
          required />
          </div>
        </form>
        </div>
    )
}

export default Location
