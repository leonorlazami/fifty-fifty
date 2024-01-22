import React, { useState } from "react";
import Friend from "./Friend";
import Button from "./Button";
import FormAdd from "./FormAdd";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { split } from "postcss/lib/list";

const FriendList = ({
  selectFriend,
  selectedFriend,
  friends,
  addFriend,
  showForm,
  setShowForm,
}) => {
  const totalOwedToYou = friends.reduce(
    (accumulator, friend) =>
      accumulator +
      (parseInt(friend.owesYou, 10) > 0 ? parseInt(friend.owesYou, 10) : 0),
    0
  );

  const oweToYouCount = friends.filter((friend) => friend.owesYou > 0).length;

  return (
    <div className=" flex flex-col font-primary text-xl rounded-3xl py-4 md:w-[30%] md:h-fit md:mx-auto  mx-2 bg-primary px-2 md:mt-10">
      <div className="mx-auto flex flex-col items-center font-bold mb-4">
        <h3 className="text-md mb-[-0.2rem]">Fifty/Fifty</h3>
        <p className="text-gray-500 text-sm">Split the bill!</p>
      </div>
      <div className="flex w-auto bg-gradient-to-r from-violet-500 via-violet-600 to-secondary  rounded-xl px-5 mx-2 py-4  text-primary shadow-2xl gap-2 justify-between">
        <div className="flex flex-col">
          <p className="text-sm   md:text-2xl">Total owed to you</p>
          <span className="font-bold mt-2 md:text-2xl">
            {totalOwedToYou} мкд
          </span>
          <p className="text-sm md:text-lg">
            by{" "}
            {oweToYouCount === 1
              ? oweToYouCount + " " + "friend"
              : oweToYouCount + " " + "friends"}
          </p>
        </div>
      </div>
      <div className="flex justify-between mx-2 mt-6 text-sm font-bold mb-1 px-2 md:text-xl ">
        <p>Friends</p>
      </div>
      <ul className="py-2">
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectFriend={selectFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>

      {showForm && <FormAdd addFriend={addFriend} setShowForm={setShowForm} />}

      <Button
        className="mt-2 text-sm py-2 rounded-3xl md:w-[40%]  mx-auto w-1/2 md:text-lg"
        onClick={() => {
          setShowForm((prev) => !prev);
        }}
      >
        {showForm ? "Close" : " + New Friend"}
      </Button>
    </div>
  );
};

export default FriendList;
