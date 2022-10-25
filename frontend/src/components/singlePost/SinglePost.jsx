import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";
import { useState } from "react";

export default function SinglePost() {
  const PublicFolder = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={PublicFolder + post.photo}
            alt="postCover"
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <b>
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <div>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
            <div className="singlePostEditContainer">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
        <p className="singlePostContent">{post.description}</p>
      </div>
    </div>
  );
}
