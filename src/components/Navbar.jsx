import React, { useState } from "react";
import logo from "../assets/images/cinema_ticket.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [visiblity, setVisiblity] = useState(true);
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex justify-around p-10 sticky top-0 bg-white ">
      <div className="logo flex gap-3">
        <img src={logo} alt="logo" className="h-7 w-7" />
        <h1>KURET</h1>
      </div>

      <div className="navbar  max-lg:hidden">
        <ul className="flex gap-5">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/movies">MOVIES</a>
          </li>
          <li>
            <a href="/sports">SPORTS</a>
          </li>
          <li>
            <a href="/concerts">CONCERTS</a>
          </li>
          <li>
            <a href="/spacials">SPECIAL EVENTS</a>
          </li>
        </ul>
      </div>

      <div className="menu lg:hidden mr-[10%] max-sm:mr-[50%]">
        <button
          className="relative left-32"
          onClick={() => {
            setMenu(!menu);
            setVisiblity(!visiblity)
          }}
        >
          <Link href="">{menu ? "Menu" : "Close"}</Link>
        </button>
        <ul
          className={`${visiblity ? "visible": "hidden" } flex flex-col space-y-5 fixed bg-gray-500 p-7 rounded-lg`}
        >
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/movies">MOVIES</a>
          </li>
          <li>
            <a href="/sports">SPORTS</a>
          </li>
          <li>
            <a href="/concerts">CONCERTS</a>
          </li>
          <li>
            <a href="/spacials">SPECIAL EVENTS</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
