import { useContext, useEffect } from "react";
import { BlogDataContext } from "../../App";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  //Calling the Context to set the faced data to the state declared in App.js
  const [blogsData, setBlogsData] = useContext(BlogDataContext);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogsData(data))
  }, [])

  return (
    <>
      <div className='blogs-container'>
      {blogsData.map((blog, index) => (
        <Blog key={index} blog={blog} />
      ))}
      </div>
    </>
  );
};

export default Home;
