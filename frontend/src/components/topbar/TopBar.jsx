import { useContext } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../context/Actions";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { dispatch, user } = useContext(Context);

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-twitch"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="">
              Contents
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "logout"}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <img className="topAvatar" src={null} alt={user.username} />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
