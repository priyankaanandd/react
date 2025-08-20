import React, { useState,useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numberall,setnumberallowed]=useState(false)

  const[charall,setcharall]=useState(true)

  const [password,setpassword]=useState("")


  const passwordref=useRef(null)
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDERFGabcdefg"

    if(numberall) str+="023456789"
    if(charall)  str+="!@#$%^&&**()"

    for(  let i=1;i<=length;i++){
      let char=  Math.floor(Math.random() * str.length +1)

       pass+=str.charAt(char)
    }
    setpassword(pass)

  },[length,numberall,charall,password,setpassword])

  const copypwonclipboard=useCallback(()=>{
    passwordref.current?.select()
    //jo cppy hoga use blue krta h
    window.navigator.clipboard.writeText(password)
  },[password])

  //passwordgenerator()
  //You should not call state-updating functions directly inside the render.
//   When React renders App(), it calls your component function.
// Inside it, you call passwordgenerator().
// That function calls setpassword(pass).
// But setpassword updates state → causes a re-render.
// On re-render, React again calls App(), which again calls passwordgenerator(), which again calls setpassword().
// 🔁 Infinite loop!


useEffect(()=>{passwordgenerator()},[length,numberall,charall,setpassword])
  return (
    <>
    <h1 className='text-black text-center'>
      PasswordGenerator
    </h1>

    <div className="flex shadow rounded-lg overflow-hidden mb-4"> <
    input
     type="text"
    value={password}
    className='outline-none w-full py-1 px-3 '  placeholder='password'
    readOnly
    ref={passwordref} />
    <button onClick={copypwonclipboard} >copy</button></div>


    <div>
      <input type="range"
      min={2}
      max={10}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}} />
      <label> length:{length} </label>
    </div>


    <div>
     <input type="checkbox"
     defaultChecked={numberall} 
     id="numberInput"
     onChange={()=>{
      setnumberallowed((prev)=>!prev)
     }}/>
     <label htmlFor="numberInput"> Numbers</label>
    </div>

    <div>
     <input type="checkbox"
     defaultChecked={charall} 
     id="CharacterInput"
     onChange={()=>{
      setcharall((prev)=>!prev)
     }}/>
     <label htmlFor="CharacterInput"> Character</label>
    </div>





   
    </>
  )
}

export default App
