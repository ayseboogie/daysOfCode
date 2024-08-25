import React from "react";

const Day1 = () => {
  const name = "John Doe";
  alert(`Hello, ${name}!`);

  const fullName = "\tJane \n Doe";
  alert("Hello," + fullName + "!");
  alert("Hello," + fullName.trim() + "!");

  return (
    <div>
      <div>Day 1</div>
    </div>
  );
};

export default Day1;
