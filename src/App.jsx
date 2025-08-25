import { useState } from "react";
import Interactions from "./Components/Interactions";
import Home from "./Components/Home";
import Service from "./Components/Service";
import MissionVision from "./Components/MissionVision";
import FoundersMessage from "./Components/FoundersMessage";
import MedicalSpec from "./Components/MedicalSpec";
import Footer from "./Components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-primary">
      <Home />
      <Interactions />
      <Service />
      <MissionVision />
      <FoundersMessage />
      <MedicalSpec />
      <Footer />
    </div>
  );
}

export default App;
