import { useState } from "react";
import Interactions from "./Components/Interactions";
import Home from "./Components/Home";
import Service from "./Components/Service";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Interactions />
      <Service />
    </>
  );
}

export default App;
