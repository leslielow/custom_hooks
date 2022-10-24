import Card from "./components/Card";
import UseCounter from "./hooks/useCounter";

function App() {

  const [counter, incrementar, decrementar] = UseCounter();

  return (

    <div>
      <h1>Visualiza los personajes de la serie Rick and Morty!</h1>
      <Card numero={counter}/>
      <h3>{counter}</h3>
      <button onClick={() => incrementar()}>Incrementar</button>
      <button onClick={() => decrementar()}>Decrementar</button>
    </div>
  );
}

export default App;
