import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Generate from "./pages/Generate";
import GetData from "./pages/GetData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Generate />} />
      <Route path="/data" element={<GetData />} />
    </Routes>
  );
}

export default App;
