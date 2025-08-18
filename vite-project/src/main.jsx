import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './chai.jsx'


//in vurtual dom->
//create root ek dom create krta hain and real dom se comparre krta h
//jo change hua hota h sirf unhi cheezo ko bdlta h
// in broweser->page reload is poora dom dobara create hotta h

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
