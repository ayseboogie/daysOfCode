import React from "react";

const Day4 = () => {
  const nameArray = [
    "Cayla",
    "Noah",
    "Leland",
    "Becca",
    "Zach",
    "Ashton",
    "Shakti",
  ];

  return (
    <div>
      <div>Day 4</div>
      {/* I am adding a comment */}
      <div>this is a commented line of code</div>
      <br />
      <div>
        {nameArray.map((name, index) => {
          return <div key={index}>{name}</div>;
        })}
      </div>
      <br />
      <div>
        {nameArray.map((name, index) => {
          return <div key={index}>My friend&apos;s name is {name}</div>;
        })}
      </div>
    </div>
  );
};

export default Day4;
