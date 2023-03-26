import React from "react";
import { Link } from "react-router-dom";
import Book from "./bookcomponent/Book";

export default function Card(props) {
  return (
    <div className="w-[350px] h-[300px] rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-[350px] h-[300px]"
        src={`data:image/png;base64,${props.img}`}
        alt="Sunset in the mountains"
      />
    </div>
  );
}
