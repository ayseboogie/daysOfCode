import React from "react";

const Day6 = () => {
  const dinnerList = ["depp", "musk", "jolie", "mckenzie", "lucas"];
  const dinnerList2 = [...dinnerList];
  dinnerList2.unshift("cavs");
  dinnerList2.push("cookie");
  dinnerList2.splice(3, 0, "amby");

  const worldVisit = ["hawaii", "italy", "sri lanka", "australia", "france"];
  const alphebiticalOrder = [...worldVisit].sort();
  const reverseAO = [...alphebiticalOrder].sort().reverse();

  const dinnerList3 = [...dinnerList];
  dinnerList3.shift();
  dinnerList3.pop();
  dinnerList3.splice(1, 1);

  return (
    <div>
      <div>Day 6</div>
      {/*q 1*/}
      <div>Question 1.</div>
      <div>
        {dinnerList.map((item, index) => (
          <div key={index}>
            {index + 1}. {item}
          </div>
        ))}
      </div>
      <br />
      <div>Question 1.5.</div>
      <div>
        {dinnerList2.map((item, index) => (
          <div key={index}>
            {index + 1}. {item}
          </div>
        ))}
      </div>
      <br />
      {/*q 2 */}
      <div>Question 2</div>• Print your array in its original order.
      <div>
        1)&nbsp;
        {worldVisit.map((item, index) => (
          <span key={index}>
            {index + 1}. {item}, &nbsp;
          </span>
        ))}
      </div>
      • Print your array in alphabetical order without modifying the actual
      list.
      <div>
        2)&nbsp;
        {alphebiticalOrder.map((item, index) => (
          <span key={index}>
            {index + 1}. {item}, &nbsp;
          </span>
        ))}
      </div>
      • Show that your array is still in its original order by printing it.
      <div>
        3)&nbsp;
        {worldVisit.map((item, index) => (
          <span key={index}>
            {index + 1}. {item}, &nbsp;
          </span>
        ))}
      </div>
      • Print your array in reverse alphabetical order without changing the
      order of the original list.
      <div>
        4)&nbsp;
        {reverseAO.map((item, index) => (
          <span key={index}>
            {index + 1}. {item}, &nbsp;
          </span>
        ))}
      </div>
      • Show that your array is still in its original order by printing it
      again.
      <div>
        5)&nbsp;
        {worldVisit.map((item, index) => (
          <span key={index}>
            {index + 1}. {item}, &nbsp;
          </span>
        ))}
      </div>
      • Reverse the order of your list. Print the array to show that its order
      has changed.
      <div>
        6)&nbsp;
        {worldVisit.reverse().map((item, index) => (
          <span key={index}>
            {index + 1}. {item}, &nbsp;
          </span>
        ))}
      </div>
      • Reverse the order of your list again. Print the list to show it’s back
      to its original order.
      <div>
        7)&nbsp;
        {worldVisit.reverse().map((item, index) => (
          <span key={index}>
            {index + 1}. {item}, &nbsp;
          </span>
        ))}
      </div>
      • Sort your array so it’s stored in alphabetical order. Print the array to
      show that its order has been changed.
      <div>
        8)&nbsp;
        {worldVisit.reverse().map((item, index) => (
          <span key={index}>
            {index + 1}. {item}, &nbsp;
          </span>
        ))}
      </div>
      • Sort to change your array so it’s stored in reverse alphabetical order.
      Print the list to show that its order has changed.
      <div>
        9)&nbsp;
        {worldVisit
          .sort()
          .reverse()
          .map((item, index) => (
            <span key={index}>
              {index + 1}. {item}, &nbsp;
            </span>
          ))}
      </div>
      <br />
      {/*  q 3*/}
      <div>
        {dinnerList3.map((item, index) => (
          <div key={index}>
            {index + 1}. {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day6;
