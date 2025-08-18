import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter=3
//usestate hmare state ko change krta h mtlb ui k andar propogate krta h hr jagar jahan jahan krna hota h
//ye react ka kaam h to respond or react to change and show them in ui
//usestare return array of size 2
let [coun,setcounter]=useState(15)

//coun is a varialbe 
//setcounter is a function to update this variale

 const addvalue=()=>{
  setcounter(coun+1)
 }

 const remove=()=>{
  
  setcounter(coun-1) ;
 }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value:{coun}</h2> 

     <button onClick={addvalue}>add value{coun}</button>
     <br />
     <button onClick={remove}> remove value {coun}</button>
    </>
  )
}
export default App
