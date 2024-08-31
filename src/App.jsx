import { useContext } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";

function App() {
  const { count, increment, decrement } = useContext(AppContext);

  return (
    <main style={{ display: "grid", placeContent: "center" }}>
      <span style={{ fontSize: "90px" }}>{count}</span>

      <div style={{ display: "flex" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </main>
  );
}

export default App;
