import { useEffect, useReducer } from 'react'
import './App.css'
import arbol_laserImg from "./assets/arbol_laser.png  ";
import canion_turronImg from "./assets/canion_turron.png";
import caramelo_sangrientoImg from "./assets/caramelo_sangriento.png";
import multiplicadorImg from "./assets/multiplicador.png";
import reno_lanza_cohetesrImg from "./assets/reno_lanza_cohetes.png";
import torreImg from "./assets/torre.png";

function App() {

  const INITIAL_STATE = {
damageDealt: 0
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
