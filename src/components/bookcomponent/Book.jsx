import React from "react";

export default function Book(props) {
  return (
    <div className="flex items-center justify-center  bg-slate-500">
      <div className="content flex">
        <div className="card flex items-center">
          <img
            className="w-[450px] h-[500px]"
            src={`data:image/png;base64,${props.img}`}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="ticket-discripion bg-slate-200 h-[500px] ">
          <form
            action=""
            className=" flex flex-wrap gap-9 mt-32 font-bold text-2xl p-12"
          >
            <label className="w-1/12">8:00</label>
            <input type="radio" name="time" value="8:00"/>
            <label>10:00</label>
            <input type="radio" name="time" value="10:00" />

            <label>Number of tickets</label>
            <input type="number" />

            <button type="submit" className="bg-blue-600 px-7 py-4 rounded-md">
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
