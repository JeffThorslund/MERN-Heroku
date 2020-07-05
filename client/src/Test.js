import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.text())
      .then((response) => console.log(response));
  }, []);

  return <div></div>;
};

export default Test;
