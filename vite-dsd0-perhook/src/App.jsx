import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSumar } from '../funciones/useSumar'

function App() {

  // const sumar=()=>{
  //   console.log('sumaré');
  //   setCount((count) => count + 1)
  // }

  // const [count, setCount] = useState(0);
  const [resultado,incrementar] = useSumar(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(e=>incrementar(e))}>
          count is {resultado}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
