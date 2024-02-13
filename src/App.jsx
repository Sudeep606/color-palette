import './App.css'
import React, { useState, useEffect } from "react";



function App() {
  const [color, setColor] = useState("black");
  const handleClick =(newColor)=>{
    setColor(newColor)
  };
  useEffect (()=>{
    document.body.style.backgroundColor = color;
  },[color]);


  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center '>
    <div style={{width:'500px',padding:'10'}} className='bg-light p-5 rounded '><h3 style={{textAlign:'center'}}>color palette</h3>
  <button onClick={() => handleClick("red")} style={{width:'100px',height:'50px'}} className='bg-danger' variant="contained">red</button>
  <button onClick={() => handleClick("blue")} style={{width:'100px',height:'50px'}} className='bg-primary' variant="contained">blue</button>
  <button onClick={() => handleClick("green")} style={{width:'100px',height:'50px'}} className='bg-success' variant="contained">green</button>
  <button onClick={() => handleClick("yellow")} style={{width:'100px',height:'50px'}} className='bg-warning' variant="contained">yellow</button>

     </div>

     </div>
  
  )
}

export default App
