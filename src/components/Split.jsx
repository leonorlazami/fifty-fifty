import React, { useState } from "react";
import Button from "./Button";

const Split = ({ selectedFriend, handleSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("You");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser || !whoIsPaying) return;

    handleSplitBill(bill, paidByUser, whoIsPaying);
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("You");
    if (selectedFriend === null) {
      return null;
    }
  };

  return (
    <div className="rounded-3xl md:w-1/2  md:ml-2 font-primary bg-primary w-full px-4 text-sm font-bold  ">
      <div className="flex items-center justify-around">
        <h3 className=" mt-4 md:px-24 md:text-3xl text-xl font-bold py-2">
          Split the bill with {selectedFriend.name ? selectedFriend.name : ""}
        </h3>
        <img
          src={selectedFriend.image}
          alt=""
          className="rounded-full w-10 md:w-16 mt-4"
        />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 mt-4 md:text-normal py-2 mx-2 ">
          <label htmlFor="bill" className="flex  flex-col  md:mx-32">
            <p className="ml-3 mb-1">Bill Value</p>
            <input
              placeholder="mkd"
              type="text"
              className="w-full bg-selected rounded-2xl h-10 text-right pr-4 outline-gray-300"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </label>

          <label
            htmlFor="expense"
            className="flex flex-col justify-between  md:mx-32"
          >
            <p className="ml-3 mb-1">Your expense</p>
            <input
              placeholder="mkd"
              type="text"
              className="bg-selected rounded-2xl h-10 text-right pr-4 outline-gray-300"
              value={paidByUser}
              onChange={(e) => setPaidByUser(Number(e.target.value))}
            />
          </label>

          <label
            htmlFor=""
            className="flex  flex-col justify-between  md:mx-32"
          >
            <p className="ml-3 mb-1">Who is paying the bill</p>
            <select
              placeholder={selectedFriend.name}
              name="payer"
              id="payer"
              className="  bg-selected h-10 text-right pr-4 rounded-2xl outline-gray-300"
              value={whoIsPaying}
              onChange={(e) => setWhoIsPaying(e.target.value)}
            >
              <option value="You">You</option>
              <option
                value={selectedFriend === null ? "Person" : selectedFriend.name}
              >
                {selectedFriend === null ? "Person" : selectedFriend.name}
              </option>
            </select>
          </label>
          <div className="flex w-full justify-end flex-col mt-2">
            <div className="flex w-full justify-center">
              <Button type="submit" className=" md:w-1/2 mx-auto mb-2 w-[50%]">
                SPLIT IT!
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Split;
