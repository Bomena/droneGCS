import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import ROSLIB from "roslib";

const ros = new ROSLIB.Ros({ url: "ws://localhost:9090" });

const getLat = new ROSLIB.Topic({
  ros : ros,
  name : '/latitude',
  messageType : "std_msgs/String"
})

const getLng = new ROSLIB.Topic({
  ros : ros,
  name : '/longitude',
  messageType : "std_msgs/String"
})

getLat.subscribe(function(message) {
  console.log("hi?");
  let latText = message.data;
  document.getElementById('lat').innerHTML += latText
})

class MapContainer extends Component {

  render() {
    return(
      <Map
        google = {this.props.google}
        style = {{width: "100%", height: "92%"}}
        zoom = {18}
        initialCenter = {
          {
            lat: 36.58173,
            lng: 127.52659
          }
        }
      >
        <Marker className="hi" position={{lat: 36.58173, lng: 127.52659}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:"AIzaSyBh28T_j0o2EOvDrB4W9HXLe5s5ni4slLM"
})(MapContainer)