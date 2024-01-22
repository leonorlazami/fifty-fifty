import React, { useState } from "react";
import Button from "./Button";

const Split = ({ selectedFriend, handleSplitBill, splitRef }) => {
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
    <div
      id="split"
      tabIndex="0"
      className="flex flex-col font-primary  rounded-3xl py-1 md:w-[30%] md:h-fit md:mx-auto  mx-2 bg-primary px-2 md:mt-10 text-sm font-bold my-4  "
    >
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
        <div className="flex flex-col gap-4 mt-4 md:text-normal py-2  w-auto mx-auto   first:border-t ">
          <div className="flex items-center justify-center">
            <label htmlFor="bill" className="flex flex-col  gap-1">
              <p className="ml-3 mb-1">Bill Value</p>
              <input
                placeholder="mkd"
                type="text"
                className=" bg-selected rounded-2xl text-right pr-4 outline-gray-300 w-auto py-1"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </label>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="expense" className="flex flex-col  gap-1 ">
              <p className="ml-3 mb-1">Your expense</p>
              <input
                placeholder="mkd"
                type="text"
                className="bg-selected rounded-2xl text-right pr-4 outline-gray-300  py-1"
                value={paidByUser}
                onChange={(e) => setPaidByUser(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="flex items-center justify-center">
            <label htmlFor="" className="flex flex-col items-center gap-1">
              <p className="ml-3 mb-1">Who is paying the bill</p>
              <select
                placeholder={selectedFriend.name}
                name="payer"
                id="payer"
                className="  bg-selected h-10   rounded-2xl outline-gray-300  self-end  w-[6rem] text-center px-4"
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
              >
                <option value="You">You</option>
                <option
                  value={
                    selectedFriend === null ? "Person" : selectedFriend.name
                  }
                >
                  {selectedFriend === null ? "Person" : selectedFriend.name}
                </option>
              </select>
            </label>
          </div>
          <div className="flex border-t py-1 ">
            <Button type="submit" className=" md:w-[30%] mx-auto mt-2 w-1/2  ">
              SPLIT IT!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Split;
