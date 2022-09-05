import React from 'react'
import '../styles/App.css';
import{useState} from 'react
const App = () => {
  const [data, setData] = useState("")
  
    const handleInput1 = (event) =>{
        const input1 = event.target.value
          setData(input1)
          console.log(input1)
        }
        const handleInput2 = (event) =>{
          const input2 = event.target.value
            setData(input2)
          console.log(input2)
        }
  // do not change id of input elements
  return (
    <div id="main">
       <h1>{data}</h1>
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
