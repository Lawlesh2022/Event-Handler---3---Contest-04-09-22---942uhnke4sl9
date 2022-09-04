import React from 'react'
import '../styles/App.css';
import {useState} from 'react'
const App = () => {
const [text1, setText1] = useState("")
const [text2, setText2] = useState("")
  const handleInput1 = (event) =>{
  setText1(event.target.value)
  }
  const handleInput1 = (event) =>{
   setText(event.target.value)
  }

  // do not change id of input elements
  return (
    <div id="main">
       <p>{text1}{text2}</p>
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange = {handleInput1}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange = {handleInput2} />
      <br/>
    </div>
  )
}


export default App;
