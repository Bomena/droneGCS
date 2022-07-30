import './App.css';
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

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