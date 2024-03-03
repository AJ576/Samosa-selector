import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [muliplier, setMultiplier] = useState(1)

  function updateCount()
  {
    return setCount(count+ muliplier)
  }

  const buyDouble = ()=>
  {
    if(count>10)
    {
      setMultiplier(muliplier*2);
      setCount(count-10)
    }
  }

  const buy5times = ()=>
  {
    if(count>100)
    {
      setMultiplier(muliplier*5);
      setCount(count-100)
    }
  }

  const buy10X = () =>
  {
    if(count>1000)
    {
      setMultiplier(muliplier*10)
      setCount(count-1000)
    }
  }

  return (
      <div className='App'>
        <h1 className='header'>Samosa Selector</h1>
        <h2>Count : {count}</h2>
        <img className="samosa" src='src\assets\Samosa.png' onClick={updateCount}></img>

        <div className='container'>

          <div className='upgrade'>
            <h3>Double stuffed</h3>
            <p>2x per click</p>
            <button onClick={buyDouble}>10 samosas</button>
          </div>

          <div className='upgrade'>
            <h3>Party Pack</h3>
            <p>5x per click</p>
            <button onClick={buy5times}>100 samosas</button>
          </div>

          <div className='upgrade'>
            <h3>Full feast</h3>
            <p>10x per click</p>
            <button onClick={buy10X}>1000 samosas</button>
          </div>
        </div>
      </div>
  )
}

export default App
