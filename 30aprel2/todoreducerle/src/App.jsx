import { useState } from "react";

import "./App.css";
import Home from "./components/Home";



function App() {
  let [count, setCount] = useState(0);

  return (
    
      <Home/>
  );
}

export default App;