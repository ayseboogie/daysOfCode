import React from "react";

const Day3 = () => {
  const addition = 4 + 4;
  const subtraction = 72 - 64;
  const multiplication = 4 * 2;
  const division = 64 / 8;

  const favoriteNumber = 9;

  return (
    <div>
      <div>Day 3</div>
      <div>4 + 4 = {addition}</div>
      <div></div>
      <div>72 - 64 = {subtraction}</div>
      <div>4 * 2 = {multiplication}</div>
      <div>64 / 8 = {division}</div>

      <br />

      <div>my favorite number is {favoriteNumber} all the time</div>
    </div>
  );
};

export default Day3;
