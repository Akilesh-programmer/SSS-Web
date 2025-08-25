import { useState } from "react";
import Interactions from "./Components/Interactions";
import Home from "./Components/Home";
import Service from "./Components/Service";
import MissionVision from "./Components/MissionVision";
import FoundersMessage from "./Components/FoundersMessage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Interactions />
      <Service />
      <MissionVision />
      <FoundersMessage />
    </>
  );
}

export default App;
