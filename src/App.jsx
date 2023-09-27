import { useState } from "react";
import FriendList from "./components/FriendList";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Split from "./components/Split";
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
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const selectFriend = (id) => {
    const friend = friends.find((friend) => friend.id === id);
    setSelectedFriend(friend);
  };
  const addFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  const handleSplitBill = (amount) => {
    setFriends((friend) =>
      friend.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row  mt-10">
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
