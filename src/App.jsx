import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import Output from './components/Output'

function App() {
  const [tipData, setTipData] = useState({ amount : '', peopleCount : '', tipPercent : '' });

  return (
    <div className='container'>
      <h1>SPLITTER</h1>
      <div className='main-container'>
        <InputField setTipData={setTipData} tipData={tipData}></InputField>
        <Output tipData={tipData} setTipData={setTipData} ></Output>
      </div>
    </div>
  )
}

export default App
