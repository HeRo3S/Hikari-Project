import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCat();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarAvatar"
          src={require("../../image/violet.jpg")}
          alt="sidebar avatar"
        />
        <p className="sidebarDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          bibendum nibh. Nulla consequat magna sed nibh pretium pretium. Nam
          feugiat porttitor sollicitudin.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem" key={c}>
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
