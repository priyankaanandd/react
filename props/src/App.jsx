import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const newArr=[1,2,3]

  return (
    <>
     
        
      <h1 className='bg-green-400 text-black p-4
      rounded'>tailwind test</h1>
      <Card channel="chai aur code" someobj={newArr}/>
      {/* jo yahan pass krkhe h card mei vhi props mei pass ho jaegiv 
      ye sb ab props mei chle jaengi */}
      <Card channel="priyanka" btnText="click me"/>
    </>
  )
}

export default App
