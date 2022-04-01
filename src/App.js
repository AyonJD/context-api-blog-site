import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Components/Home/Home'
import Navbar from "./Components/Navbar/Navbar";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App;
