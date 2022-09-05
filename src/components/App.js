import React from 'react'
import '../styles/App.css';
import{useState} from 'react
const App = () => {
  const [data1, setData1] = useState("")
   const [data2, setData2] = useState("")
    const handleInput1 = (event) =>{
        const input1 = event.target.value
          setData1(input1)
          console.log(input1)
        }
        const handleInput2 = (event) =>{
          const input2 = event.target.value
            setData2(input2)
          console.log(input2)
        }
  // do not change id of input elements
  return (
    <div id="main">
       <h1>{data1}</h1>
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange = {handleInput1}/>

      <br/>
      <br/>
        <h1>{data2}</h1>
      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange = {handleInput2} />
      <br/>
    </div>
  )
}


export default App;
