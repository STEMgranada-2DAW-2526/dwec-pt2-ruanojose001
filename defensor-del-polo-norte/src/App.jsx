import { useEffect, useReducer } from 'react'
import './App.css'
import arbol_laserImg from "./assets/arbol_laser.png";
import canion_turronImg from "./assets/canion_turron.png";
import caramelo_sangrientoImg from "./assets/caramelo_sangriento.png";
import multiplicadorImg from "./assets/multiplicador.png";
import reno_lanza_cohetesrImg from "./assets/reno_lanza_cohetes.png";
import torreImg from "./assets/torre.png";

const INITIAL_STATE = {
  damageDealt: 0,
  waveGoal: 100,
  caramels: 20,
  damagePerShot: 1,
  autoShotsPerSecond: 1,
  upgrades: [],
}


export default function App() {

  function shotReducer(state, action) {

    let outputState = state;

    if (action.type == 'CLICK_SHOOT') {
      outputState =
      {
        ...state,
        damageDealt: state.damageDealt + state.damagePerShot
      }
    }
    else if (action.type == 'AUTO_SHOOT') {
      outputState =
      {
        ...state,
        damageDealt: state.damageDealt + state.damagePerShot * state.autoShotsPerSecond
      }
    }
    else if (action.type == 'BUY_DAMAGE_UPGRADE') {
      outputState =
      {
        ...state,
        caramels: state.caramels - 15,
        autoshotPerSecond: state.autoShotsPerSecond + 1
      }
    }
    else if (action.type == 'NEXT WAVE') {
      outputState =
      {
        ...state,
        caramels: state.caramels + 10,
        damageDealt: 0,
        waveGoal: Math.round(waveGoal * 1.1)
      }
    }

    return outputState;

  }

  const [state, dispatch] = useReducer(shotReducer, INITIAL_STATE)

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch({ type: 'AUTO_SHOOT' })
    }, 1000);

    return () => clearInterval(timer)
  }, []);

  return (
    <>
      <div>
        <h1>
          Daño {state.damageDealt} Caramelos {state.caramels} Oleada {state.waveGoal}
        </h1>

        <button onClick={() => dispatch({ type: 'CLICK_SHOOT' })}>
        </button>
      </div>

    </>
  )
}