import React from 'react'
import '../styles/App.css';
const App = () => {
  const handleInput1 = (event) =>{
  const input1 = event.target.value
    
    console.log(input1)
  }
  const handleInput2 = (event) =>{
    const input2 = event.target.value

    console.log(input2)
  }

  // do not change id of input elements
  return (
    <div id="main">      
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
