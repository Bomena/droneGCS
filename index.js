import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './pages/Map';
import GridTop from './pages/index'
import reportWebVitals from './reportWebVitals';
//import lat, lng from "./pages/Map";
//import picture from './offline.png'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GridTop />
    <div id='log' className='log'>
      <h4 className='text' id='lat'>latitude : {}</h4>
      <h4 className='text' id='lng'>longitude : {}</h4>
    </div>
    <Map id='map' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
