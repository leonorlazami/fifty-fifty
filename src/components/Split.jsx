import React from "react";
import Button from "./Button";

const Split = ({ selectedFriend }) => {
  if (selectedFriend === null) {
    return null;
  }
  return (
    <div className="bg-kinda-dark-green mx-auto h-1/2 relative bottom-3 py-5 rounded-md md:h-[1/2] z-1 md:bottom-0 w-full md:w-1/2 md:ml-2 text-kinda-white font-custom-one">
      <h3 className="text-3xl px-4 md:px-24 md:text-4xl">
        SPLIT BILL WITH {selectedFriend.name}
      </h3>
      <div className="flex flex-col gap-4 mt-4 md:text-3xl text-xl">
        <label htmlFor="bill" className="flex justify-between mx-4 md:mx-32">
          Bill value
          <input type="number" className="w-[23%]  text-black" />
        </label>

        <label htmlFor="expense" className="flex justify-between mx-4 md:mx-32">
          Your expense
          <input type="number" className="w-[23%]  text-black" />
        </label>

        <label htmlFor="bill" className="flex  justify-between mx-4 md:mx-32">
          Persons expense
          <input
            disabled
            readOnly
            type="number"
            className="w-[23%]  text-black"
          />
        </label>

        <label htmlFor="" className="flex  justify-between mx-4 md:mx-32">
          Who is paying the bill
          <select name="payer" id="payer" className="text-black w-[23%]">
            <option value="You">You</option>
            <option
              value={selectedFriend === null ? "Person" : selectedFriend.name}
            >
              {selectedFriend === null ? "Person" : selectedFriend.name}
            </option>
          </select>
        </label>
        <div className="flex w-full justify-end">
          <Button className="md:mx-32 md:w-[15%] w-1/5">Split</Button>
        </div>
      </div>
    </div>
  );
};

export default Split;
