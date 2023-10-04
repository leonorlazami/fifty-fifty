import { useState } from "react";
import FriendList from "./components/FriendList";

import Split from "./components/Split";
const initialFriends = [
  {
    id: 933372,
    name: "Efki",
    image: "https://i.pravatar.cc/64?u=933372",
    owesYou: 300,
    youOwe: 0,
  },
  {
    id: 933373,
    name: "Semi",
    image: "https://i.pravatar.cc/64?u=933372",
    owesYou: 0,
    youOwe: 0,
  },
  {
    id: 499476,
    name: "Rroni",
    image: "https://i.pravatar.cc/64?u=499476",
    owesYou: 0,
    youOwe: 0,
  },
];
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  console.log("kit friends", friends);

  const selectFriend = (id) => {
    const friend = friends.find((friend) => friend.id === id);
    setSelectedFriend(friend);
  };

  const addFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  const handleSplitBill = (amount, paidByUser, whoIsPaying) => {
    console.log("selectedfriendid", selectFriend.id);
    const userOwesFriend = whoIsPaying === "You" ? amount - paidByUser : 0;
    const friendOwesUser = whoIsPaying === selectedFriend.name ? paidByUser : 0;

    const newFriends = friends.map((friend) => {
      if (friend.id === selectedFriend.id) {
        return {
          ...friend,
          owesYou: friend.owesYou + userOwesFriend,
          youOwe: friend.youOwe + friendOwesUser,
        };
      } else {
        return friend;
      }
    });

    setFriends(newFriends);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row  mt-4">
        <FriendList
          showForm={showForm}
          setShowForm={setShowForm}
          friends={friends}
          addFriend={addFriend}
          selectFriend={selectFriend}
          selectedFriend={selectedFriend}
        />
        {selectedFriend && (
          <Split
            selectedFriend={selectedFriend}
            handleSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
