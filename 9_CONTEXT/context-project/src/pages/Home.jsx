import React from "react";
import "./Home.css";
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
  const { counter, setCounter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color => { 
    dispatch({ type: color });
  })

  return (
  <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <div className='btnContainer'>
        <button onClick={() => setCounter(counter + 1)}>Adicione o valor para contar</button>
        <button onClick={() => setCounter(0)}>Resete o contador</button>
      </div>
      <div className="btnContainer">
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
      </div>
  </div>);
};

export default Home;
