import "./profile.css";
import pp from "./IMG20201219212550101.jpeg"
export default function Profile() {
    return(
      
      <div className="profile">
        <br></br>
        <br></br>
        <br></br>
        <h1>Profile</h1>
        <br></br>
        <br></br>
        <div class="card">
  <img src={pp} alt="on"></img>
  <h1>Edmond Sadiki</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  
  <p><button className="profilebutton">Contact</button></p>
</div>
      </div>
           
      );
    }
    