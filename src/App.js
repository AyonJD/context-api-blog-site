import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Components/Home/Home'
import Navbar from "./Components/Navbar/Navbar";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import Blog from "./Components/Blog/Blog";
import BlogDetails from "./Components/BlogDetails/BlogDetails";

//Creating Context for sharing faced data to all the Component
const BlogDataContext = createContext();
function App() {
  const [blogsData, setBlogsData] = useState([])

  return (
    <div>
      <BlogDataContext.Provider value={[blogsData, setBlogsData]}>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/videos" element={<Videos></Videos>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/blog/:id" element={<BlogDetails></BlogDetails>}></Route>
        </Routes>
      </BlogDataContext.Provider>
    </div>
  )
}

export default App;
export {BlogDataContext}
