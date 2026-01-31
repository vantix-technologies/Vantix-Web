import { useState } from 'react'
import './App.css'
import logo from "./assets/vantix_logo.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img 
        src={logo} 
        alt="Logo Vantix" 
        style={{ width: "250px", marginBottom: "20px" }} 
      />
      
      <p className="read-the-docs">
        <p>Soluciones tecnológicas para tu empresa</p>
      </p>
    </>
  )
}

export default App
