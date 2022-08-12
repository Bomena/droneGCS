import React, { useState } from "react";
import ROSLIB from "roslib";
import "../index"
import "./style.css"
import "../index.css"


const ros = new ROSLIB.Ros({ url: "ws://localhost:9090" });

const camTopic = new ROSLIB.Topic({
  ros: ros,
  name: "/img",
  messageType: "sensor_msgs/CompressedImage",
});

const SetViz = (props) => {
  const [receiveCam, setReceiveCam] = useState([]);
    //   const [position, setPosition] = useState({
    //    center: { lat: 37.450585, lng: 126.656955 },
    //    isPanto: false,
    //   });

  
  camTopic.subscribe(function (message) { 
    let image = new Image();
    image.src = "data:image/jpg;base64," + message.data;
    receiveCam.src = image.src
    document.getElementById('pic').src = image.src
  });

    // gpsTopic.subscribe(function (message) {
    //   setPosition({
    //     center: { lat: message.x, lng: message.y },
    //     isPanto: false,
    //   });
    // });
  

  const onChangeImg = () => {
    setReceiveCam(document.getElementById('pic').src);
  }

  return (
    <>
      <img id="pic" src={receiveCam.src} onChange={onChangeImg} />
      
    </>   
  )
}

export default SetViz;