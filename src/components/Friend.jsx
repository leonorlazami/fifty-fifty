import React from "react";
import Button from "./Button";

const Friend = ({ friend }) => {
  return (
    <li className="flex gap-1 my-2 hover:bg-kinda-dark-green hover:rounded-sm">
      <img
        src={friend.image}
        alt={friend.name}
        className="rounded-full mx-2 my-1"
      />

      <div className="flex-grow flex flex-col">
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="text-left">
            You owe {friend.name} {Math.abs(friend.balance)}den
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green">
            {friend.name} owes you {Math.abs(friend.balance)}den
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      </div>
      <Button> Close</Button>
    </li>
  );
};

export default Friend;
