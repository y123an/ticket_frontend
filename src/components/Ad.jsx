import React from "react";

export default function Ad(props) {
  return (
    <div>
      <div >
        <img src={props.img} alt=""  className="h-[100%] w-[100%] p-6"/>
      </div>
    </div>
  );
}
