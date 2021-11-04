import { seRef } from "react";

import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import "./chat.css";
export default function chat() {
//Webcam
const webcamRef = UseRef(null);
const canvasRef = useRef(null); 
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
