import { useEffect, useState } from 'react'

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')

function bmiCalc(){
  if (!weight || !height){
    return
  } else {
    setBmi(
      weight/(height*height)
      )
  }
  }

function reload(){
    setBmi('')
    setHeight('')
    setWeight('')
  }

  return (
    <div className="App">
      <div className='bmi-tracker'>
      <div className='title'>
        <h1>BMI Tracker</h1>
      </div>
      <div className='input-container'>
        Height (M)
        <input type="text" placeholder='Height(M)' value={height} id="height" onChange={(e)=>setHeight(e.target.value)}/>
        Weight (KG)
        <input type="text" placeholder='Weight(KG)' value={weight} id="weight" onChange={(e)=>setWeight(e.target.value)}/>
      </div>
      <div className='button-container'>
        <button onClick={bmiCalc}>Submit</button>
        <button onClick={reload}>Reload</button>
        </div>
      <div className="result">
        Your BMI is: {bmi}
      </div>
      </div>
    </div>
  );
}

export default App;
