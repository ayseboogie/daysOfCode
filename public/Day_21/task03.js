/*
* Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a
* special type alias, including properties unique to each shape.

* Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing
* more complex information, such as the details of different shapes.
*/
let circle = {
  shape: "circle",
  radius: 200,
};
let rectangle = {
  shape: "rectangle",
  horizontal: 250,
  vertical: 250,
};
console.log(circle.shape);
console.log(rectangle);
export {};
