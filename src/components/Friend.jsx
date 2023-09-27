import React from "react";
import Button from "./Button";

const Friend = ({ friend, selectFriend, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  console.log("friend.id:", friend.id);
  console.log("selectedFriend.id:", selectedFriend?.id);

  return (
    <li
      className={`${
        isSelected ? "bg-kinda-dark-green" : ""
      } flex gap-1 my-2 hover:bg-kinda-dark-green`}
    >
      <img
        src={friend.image}
        alt={friend.name}
        className="rounded-full mx-2 my-1"
      />

      <div className="flex-grow flex flex-col mr-2">
        <h3 className="font-bold text-2xl">{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="text-red-400">
            You owe {friend.name} {Math.abs(friend.balance)} ден
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green-400">
            Owes you {Math.abs(friend.balance)} ден
          </p>
        )}
        {friend.balance === 0 && (
          <p className="font-bold">You and {friend.name} are even</p>
        )}
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            console.log("console logging", friend.id);
            console.log(isSelected);
            selectFriend(friend.id);
          }}
        >
          {isSelected ? "Selected" : "Select"}
        </Button>
        <Button> Edit</Button>
      </div>
    </li>
  );
};

export default Friend;
