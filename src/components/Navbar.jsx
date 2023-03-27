import React, { useState } from "react";
import logo from "../assets/images/cinema_ticket.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [visiblity, setVisiblity] = useState(false);
  const [menu, setMenu] = useState(true);
  return (
    <div className="flex justify-around p-10 sticky top-0 bg-white ">
      <div className="logo flex gap-3 text-2xl">
        <img src={logo} alt="logo" className="h-7 w-7" />
        <h1>KURET</h1>
      </div>

      <div className="navbar  max-lg:hidden">
        <ul className="flex gap-5">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/movies">MOVIES</Link>
          </li>
          <li>
            <Link to="/sports">SPORTS</Link>
          </li>
          <li>
            <Link to="/concerts">CONCERTS</Link>
          </li>
          <li>
            <Link to="/spacials">SPECIAL EVENTS</Link>
          </li>
        </ul>
      </div>

      <div className="menu lg:hidden mr-[10%] max-sm:mr-[50%] ">
        <button
          className="relative left-32"
          onClick={() => {
            setMenu(!menu);
            setVisiblity(!visiblity)
          }}
        >
          <Link to="">{menu ? "Menu" : "Close"}</Link>
        </button>
        <ul
          className={`${visiblity ? "visible": "hidden" } flex flex-col space-y-5 relative bg-gray-500 p-7 rounded-lg relative left-32`}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/movies">MOVIES</Link>
          </li>
          <li>
            <Link to="/sports">SPORTS</Link>
          </li>
          <li>
            <Link to="/concerts">CONCERTS</Link>
          </li>
          <li>
            <Link to="/spacials">SPECIAL EVENTS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
