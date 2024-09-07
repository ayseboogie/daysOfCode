import React from "react";

const Day5 = () => {
  const carList = ["audi", "ford", "nissan", "tesla"];

  const renderCarMessages = (car: string) => {
    switch (car) {
      case "audi":
        return "I love an audi";
      case "ford":
        return "I do not love fords";
      case "nissan":
        return "I am a nissan lady";
      case "tesla":
        return "teslas will be cool one day";
      default:
        return "I walk";
    }
  };

  const carMessages = [];
  let i = 0;

  // Use a while loop to iterate over carList and generate messages
  while (i < carList.length) {
    carMessages.push(<div key={i}>{renderCarMessages(carList[i])}</div>);
    i++;
  }

  const dinnerList = ["dali", "musk", "cooper"];

  const newList = [...dinnerList];
  newList.splice(0, 1);
  newList.push("Kenny-Smith");

  return (
    <div>
      <div>Day 5</div>
      <div>
        {carList.map((car, index) => (
          <div key={index}>I would like to own a(n) {car} car.</div>
        ))}
      </div>
      <div>{carMessages}</div>
      <br />
      <div>
        {dinnerList.map((dinnerGuest, index) => (
          <div key={index}>
            I would like to cordially invite you, {dinnerGuest}, to dinner.
          </div>
        ))}
      </div>
      <br />
      <div>
        3.
        {newList.map((newGuest, index) => {
          return (
            <div key={index}>
              I would like to cordially invite you, {newGuest}, to dinner.
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Day5;
