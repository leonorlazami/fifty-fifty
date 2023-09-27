import React, { useState } from "react";
import Friend from "./Friend";
import Button from "./Button";
import FormAdd from "./FormAdd";

const initialFriends = [
  {
    id: 933372,
    name: "Ali",
    image: "https://i.pravatar.cc/64?u=933372",
    balance: 200,
  },
  {
    id: 933373,
    name: "Semi",
    image: "https://i.pravatar.cc/64?u=933372",
    balance: 200,
  },
  {
    id: 499476,
    name: "Rroni",
    image: "https://i.pravatar.cc/64?u=499476",
    balance: 0,
  },
];

const FriendList = ({
  selectFriend,
  selectedFriend,
  friends,
  addFriend,
  showForm,
  setShowForm,
}) => {
  return (
    <div className=" flex flex-col bg-real-dark-green text-kinda-white font-custom-one text-xl rounded-md py-4 md:w-[50%] md:mx-auto md:text-3xl z-10">
      <ul className="">
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
      <div className="w-full flex justify-end">
        <Button
          className=""
          onClick={() => {
            setShowForm((prev) => !prev);
          }}
        >
          {showForm ? "Close" : "Add friend"}
        </Button>
      </div>
    </div>
  );
};

export default FriendList;
