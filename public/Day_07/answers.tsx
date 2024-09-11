import React from "react";

const Day7 = () => {
  const dinnerList = ["dali", "musk", "cooper"];

  const riverList = [
    "French Broad",
    "Pigeon",
    "Nolichucky",
    "Tuckasegee",
    "Hiwassee",
  ];

  const mountainList = [
    { name: "Pisgah", altitude: 5000 },
    { name: "Roan", altitude: 6000 },
    { name: "Mitchell", altitude: 7000 },
  ];

  return (
    <div>
      <div>Day 7</div>
      <div>Q19</div>
      <div>dinner guest list: {dinnerList.length}</div>

      <br />
      <div>Q20</div>
      <div>{riverList.join(", ")}</div>

      <br />
      <div>Q21</div>
      <div>
        {mountainList.map((mountain, index) => {
          return (
            <div key={index}>
              {mountain.name} is {mountain.altitude} feet tall
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Day7;
