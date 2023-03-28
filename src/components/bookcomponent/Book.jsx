import React, { useState } from "react";
import Payment from "../payment/Payment";

export default function Book(props) {
  const [price, setPrice] = useState(100);
  const [time, setTime] = useState();
  const [tn, settn] = useState();
  const [page, setPage] = useState(true);
  const img=props.img;



  return page ? (
    <div className="flex items-center justify-center  bg-slate-500">
      <div className="content flex max-md:flex-col">
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
            <input
              type="radio"
              name="time"
              value="8:00"
              onClick={(e) => {
                setTime(e.target.value);
              }}
            />
            <label>10:00</label>
            <input
              type="radio"
              name="time"
              value="10:00"
              onClick={(e) => {
                setTime(e.target.value);
              }}
            />

            <label>Number of tickets</label>
            <input
              type="number"
              onChange={(e) => {
                setPrice((prev) => 100 * e.target.value);
                settn(e.target.value);
              }}
            />

            <button
              type="submit"
              className="bg-blue-600 px-7 py-4 rounded-md"
              onClick={() => {
                setPage(!page)
              }}
            >
              Book
            </button>

            <div>
              <p>{price} Birr </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : 
  (
    <Payment tn={tn} price={price} time={time}  img={img}/>
  );
}
