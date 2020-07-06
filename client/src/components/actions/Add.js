import React, { useState } from "react";

function Add() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      entry: value,
    };

    fetch("/api/items/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => alert(`Submitted ${data.entry}`));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Entry: 
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default Add;
