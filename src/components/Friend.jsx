import React from "react";
import Button from "./Button";

const Friend = ({ friend, selectedFriend, selectFriend, splitRef }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className="border-gray-200 last:border-b first:border-t text-black text-sm py-2 md:text-lg"
      onMouseEnter={() => {
        selectFriend(friend.id);

        if (window.innerWidth <= 768) {
          setTimeout(() => {
            window.scrollTo({
              top: window.innerHeight, // You can adjust this value
              behavior: "smooth",
            });
          }, 150);
        }
      }}
    >
      <div
        className={`${
          isSelected ? "bg-selected" : ""
        } flex items-center px-3 w-full rounded-md `}
      >
        <div className="flex items-center justify-center">
          <img
            src={friend.image}
            alt={friend.name}
            className="rounded-full mx-3 py-2"
          />

          <h3 className="font-bold text-md">{friend.name}</h3>
        </div>
        <div className="flex justify-end w-full">
          {friend.youOwe > friend.owesYou && (
            <p className="text-red-400 font-bold">
              <span className="text-gray-500">You owe {friend.name} : </span>
              {Math.abs(friend.youOwe - friend.owesYou)} ден
            </p>
          )}
          {friend.owesYou > friend.youOwe && (
            <p className="text-green-400 font-bold">
              <span className="text-gray-500">Owes you:</span>{" "}
              {Math.abs(friend.owesYou - friend.youOwe)} ден
            </p>
          )}
          {friend.owesYou === 0 && friend.youOwe === 0 && (
            <p className="font-bold">You and {friend.name} are even</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default Friend;
