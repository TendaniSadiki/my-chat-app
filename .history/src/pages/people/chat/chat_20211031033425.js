
import Webcam from "react-webcam";
import "./chat.css";


export default function chat() {

    return(
      
      <div className="chat">
         <br></br>
        <br></br>
        <br></br>
        <h1>Chat</h1>
        <Webcam ref={webcamRef} className="webcam"/>
        </div>
           
      );
    }
