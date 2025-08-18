import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';



//reactDOM is react ka khud ka dom  
//render se vp app k ui ko browser pe display krwa deta h 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <App />
    </React.StrictMode>
 
 
);


