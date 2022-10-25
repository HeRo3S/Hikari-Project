import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PublicFolder = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img
          src={PublicFolder + post.photo}
          alt="postCover"
          className="postImg"
        />
      )}

      <div className="postInfo">
        <div className="postCategoriesList">
          {post.categories.map((p) => (
            <span className="postCates">{p.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
}
