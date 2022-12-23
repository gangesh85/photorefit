import React, { useState } from "react";

const Countries = {
  India: "Delhi",
  Australia: "Canberra",
  Germany: "Berlin",
};

function Test() {
  const [clieked, setClicked] = useState("Click");

  const correctPair = () => {
    setClicked("Paired");
  };

  return (
    <div>
      <div>{clieked}</div>
      <button onClick={correctPair}>India</button>
    </div>
  );
}

export default Test;
