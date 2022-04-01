import React, { useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { BlogDataContext } from "../../App";
import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [blogsData, setBlogsData] = useContext(BlogDataContext);
  const singleBlog = blogsData.find(blog => blog._id === id);

  return (
    <>
      <div className='header-gradient' />
      <div>
        <button className='back-button' onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={singleBlog?.imageURL} alt='' />
          </div>
          <h1>{singleBlog?.title}</h1>
          <p>{singleBlog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
