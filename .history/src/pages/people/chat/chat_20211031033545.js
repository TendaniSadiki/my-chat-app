import { useRef } from "react";

import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import "./chat.css";

//Webcam
const webcamRef = useRef(null);
const canvasRef = useRef(null); 
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
