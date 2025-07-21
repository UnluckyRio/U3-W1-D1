import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent"; // Importo il componente ButtonComponent
import ImageComponent from "./ImageComponent"; // Importo il componente ImageComponent

function App() {
  const [count, setCount] = useState(0);

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
        {/* ButtonComponent */}
        <ButtonComponent text="Cliccami!" />
        <br />
        {/* ImageComponent */}
        <ImageComponent
          src="https://placedog.net/150x150"
          alt="Immagine di un cane"
          style={{ marginTop: "20px" }} // Margine superiore di 20px
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
