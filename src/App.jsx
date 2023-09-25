import { useState } from "react";
import FriendList from "./components/FriendList";
import NavBar from "./components/NavBar";
import Button from "./components/Button";

function App() {
  return (
    <>
      <NavBar />
      <div className=" bg-kinda-green  mt-10">
        <FriendList />
      </div>
    </>
  );
}

export default App;
