import React, { useState, useEffect } from "react";

function DatabaseDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/items/update")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  let display = data.map((item) => {
    return <div>{item.entry}</div>;
  });

  return <div>{display}</div>;
}

export default DatabaseDisplay;
