import React, { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numberall,setnumberallowed]=useState(false)

  const[charall,setcharall]=useState(true)

  const [password,setpassword]=useState("")

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
  return (
    <>
     <div>test</div>
    </>
  )
}

export default App
