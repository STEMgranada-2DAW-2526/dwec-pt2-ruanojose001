import { useEffect, useReducer } from 'react'
import './App.css'
import arbol_laserImg from "./assets/arbol_laser.png  ";
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
    else if (action.type == 'BUY_MULTIPLIER' && state.caramels >= 10) {
      outputState =
      {
        ...state,
          caramels: state.caramels-10,
          autoshotPerSecond: state.autoShotsPerSecond + 1
      }
    }
    else if (action.type == 'BUY_GRANDMA' && state.cookies >= state.grandmaPrice) {
      outputState =
      {
        ...state,
        grandmaCount: state.grandmaCount + 1,
        cookies: state.cookies - state.grandmaPrice,
        grandmaPrice: Math.round(state.grandmaPrice * state.grandmaPriceIncrement)
      }
    }
    else if (action.type == 'GENERATE_COOKIES') {
      outputState =
      {
        ...state,
        cookies: state.cookies + state.cursorCount * 0.1 + state.grandmaCount * 1
      }
    }

    return outputState;

  }

  const [state, dispatch] = useReducer(cookieReducer, INITIAL_STATE)

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch({ type: 'GENERATE_COOKIES' })
    }, 1000);

    return () => clearInterval(timer)
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <h1 className='col-12'>{Math.round(state.cookies)} 🍪</h1>
          <button className='col-5' onClick={() => dispatch({ type: 'CLICK_COOKIE' })}>
            <img className='img-fluid' src={cookieImg} />
          </button>
        </div>
        <div className='row justify-content-center'>
          <button className='col-md-2 col-12' onClick={() => dispatch({ type: 'BUY_CURSOR' })}>
            <img className='img-fluid' src={cursorImg} />
            x{state.cursorCount}
          </button>
          <button className='col-md-2 col-12' onClick={() => dispatch({ type: 'BUY_MULTIPLIER' })}>
            <img className='img-fluid' src={multiplierImg} />
            x{state.clickMultiplier}
          </button>
          <button className='col-md-2 col-12' onClick={() => dispatch({ type: 'BUY_GRANDMA' })}>
            <img className='img-fluid' src={grandmaImg} />
            x{state.grandmaCount}
          </button>
        </div>
        <div className='row justify-content-center'>
          <p className='col-md-2 col-12'>{state.cursorPrice} 🍪</p>
          <p className='col-md-2 col-12'>{state.multiplierPrice} 🍪</p>
          <p className='col-md-2 col-12'>{state.grandmaPrice} 🍪</p>
        </div>
      </div>

    </>
  )
}