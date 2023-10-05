import React, { useState } from "react";
import Button from "./Button";

function randomNum() {
  return Math.floor(10000000 + Math.random() * 9000000);
}

const FormAdd = ({ addFriend, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: null,
    image: `https://i.pravatar.cc/64?u=${randomNum()}`,
    owesYou: 0,
    youOwe: 0,
  });

  const [owesYou, setOwesYou] = useState(false);
  const [youOwe, setYouOwe] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      id: Date.now(),
      name: formData.name,
      image: formData.image,
      owesYou: owesYou && formData.balance,
      youOwe: youOwe && formData.balance,
    };

    addFriend(newFriend);

    setFormData({
      name: null,
      image: "https://i.pravatar.cc/48",
      owesYou: 0,
      youOwe: 0,
    });
    setShowForm(false);
  };

  return (
    <div className="flex w-full py-3 mt-4 text-sm">
      <div className="w-1/2 mx-auto ">
        <form
          className="w-full flex flex-col gap-2"
          method="post"
          onSubmit={handleSubmit}
        >
          <label htmlFor="friendName" className="font-bold">
            Friend&apos;s name
            <input
              value={formData.name || ""}
              onChange={handleChange}
              type="text"
              id="friendName"
              name="name"
              className="text-black w-full border border-gray-200 rounded-md px-3 py-1 font-normal"
            />
          </label>
          <label htmlFor="balance" className="font-bold">
            Amount of $$$
            <input
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              type="text"
              id="balance"
              className="text-black w-full border border-gray-200 rounded-md px-3 py-1  font-normal"
            />
          </label>
          <div className="flex flex-col gap-4 mx-auto w-full  py-2 font-bold">
            <label
              htmlFor="youOwe"
              className="flex items-center justify-around "
            >
              <input
                name="youOwe"
                type="radio"
                checked={youOwe}
                onChange={() => {
                  setYouOwe(true);
                  setOwesYou(false);
                }}
              />
              <p className="text-red-400">{`You will owe ${
                formData?.name ? formData.name : "friend"
              }`}</p>
            </label>

            <label
              htmlFor="owesYou"
              className="flex items-center justify-around"
            >
              <input
                name="owesYou"
                type="radio"
                className=""
                checked={owesYou}
                onChange={() => {
                  setOwesYou(true);
                  setYouOwe(false);
                }}
              />{" "}
              <p className="text-green-500">
                {" "}
                {`${formData.name ? formData?.name : "Friend"} will owe you`}
              </p>
            </label>
          </div>
          <Button className="w-[60%] mx-auto mt-4" type="submit">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormAdd;
