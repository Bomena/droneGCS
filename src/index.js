import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './App';
import GridTop from './pages/index'
import reportWebVitals from './reportWebVitals';
import img from './offline.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <GridTop />
    </div>
    <img id='pic' src={img} />
    <Map id='map' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
