import React from 'react'
import '../styles/App.css';
import {useState} from 'react'
const App = () => {
const [text, setText] = useState("")
const [num, setNum] = useState("")
const[data1, setData1] = useState([])
const[data2, setData2] = useState([])
  const handleInput1 = (event) =>{
  const input1 = event.target.value
   const newText1 = [...data1, input1]
    console.log(newText1)
  }
  const handleInput2 = (event) =>{
  const input2 = event.target.value
   const newData2 = [...data2, input1]
    console.log(newData2)
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
