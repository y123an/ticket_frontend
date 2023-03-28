import React from "react";

export default function Paymet(props) {
  return (
    <div className="bg-green-300">
      <div className="discription flex bg-gray-400 items-center justify-center max-md:flex-col">
        <div className="card flex items-center">
          <img
            className="w-[450px] h-[500px]"
            src={`data:image/png;base64,${props.img}`}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="info text-3xl space-y-5">
          <h1>Ticket Information</h1>
          <p>Price: {props.price} Birr</p>
          <p>Number of tickets: {props.tn}</p>
          <p>Time: {props.time}</p>
        </div>
      </div>
      <p className="text-4xl p-8">Payment Information</p>
      <form action="" className="p-20 flex flex-col text-xl justify-start items-start space-y-6 ">
        <label>First Name</label>
        <input type="text" name="fname" className="w-[70%] h-[50px]" />
        <label>Last Name</label>
        <input type="text" name="lname" className="w-[70%] h-[50px]" />
        <p className="text-2xl font-bold text-blue-500">Enter Your Bank Information</p>
        <label>Enter The Bank Name</label>
        <input type="text" name="bname" className="w-[70%] h-[50px]" />
        <label>Enter Your Card Number </label>
        <input type="text" name="cnumber" className="w-[70%] h-[50px]" />
        <button type="submit" className="w-[10%] bg-blue-500 p-4 rounded-lg hover:bg-yellow-300 relative left-[60%] text-white font-bold max-sm:w-[40%]">Pay</button>
      </form>
    </div>
  );
}
