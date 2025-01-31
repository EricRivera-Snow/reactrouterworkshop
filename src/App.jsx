import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Blue from "./components/Blue/Blue";
import Red from "./components/Red/Red";

function App() {
  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/blue" element={<Blue></Blue>} />
            <Route path="/red" element={<Red></Red>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
