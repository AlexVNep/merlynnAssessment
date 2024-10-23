import { useState } from "react";
import Greeting from "./Greeting";
import Form from "./Form";
import ListOutput from "./ListOutput";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting />
      <Form />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ListOutput />
    </>
  );
}

export default App;
