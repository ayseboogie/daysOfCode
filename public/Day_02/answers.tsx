import React from "react";

const Day2 = () => {
  const name = "Alan Watts";

  const famous_person = "Alan Watts";
  const message =
    "It was a musical thing all along and\n" +
    "        we were supposed to sing or to dance as the music was being\n" +
    "        played.";

  return (
    <div>
      <div>Day 2</div>
      <div>
        <h3>Q1</h3>
        &quot;Alan Watts once said, &quot;It was a musical thing all along and
        we were supposed to sing or to dance as the music was being
        played.&quot;&quot;
      </div>
      <br />
      <h3>Q2</h3>
      <div>{name.toLowerCase()}</div>
      <div>{name.toUpperCase()}</div>
      <div className="capitalize">{name}</div>
      <br />
      <h3>Q3</h3>
      <div>
        {famous_person} once said, &quot;{message}&quot;
      </div>
    </div>
  );
};

export default Day2;
