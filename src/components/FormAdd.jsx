import React, { useState } from "react";
import Button from "./Button";

const FormAdd = ({ addFriend, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: null, // Set the initial value to null
    image: "https://i.pravatar.cc/48",
    balance: "",
  });

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
      balance: parseFloat(formData.balance) || 0,
    };

    addFriend(newFriend);

    setFormData({
      name: null, // Reset the value to null after submission
      image: "https://i.pravatar.cc/48",
      balance: "",
    });
    setShowForm(false);
  };

  return (
    <div className="flex w-full">
      <div className="w-1/2 mx-auto">
        <form className="w-full" method="post" onSubmit={handleSubmit}>
          <label htmlFor="friendName">Friend name</label>
          <input
            value={formData.name || ""}
            onChange={handleChange}
            type="text"
            id="friendName"
            name="name" // Set the field name to "name"
            className="text-black w-full border border-gray-300 rounded-md px-3 py-1"
          />

          <label htmlFor="imageUrl">Image URL</label>
          <input
            value={formData.image}
            readOnly
            type="text"
            id="imageUrl"
            className="text-black w-full border border-gray-300 rounded-md px-3 py-1"
          />

          <label htmlFor="balance">Amount of $$$</label>
          <input
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            type="text"
            id="balance"
            className="text-black w-full border border-gray-300 rounded-md px-3 py-1"
          />

          <Button className="w-full" type="submit">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormAdd;
