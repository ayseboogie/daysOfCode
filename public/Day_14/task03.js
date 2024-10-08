/*
* Question 42: Great Magicians: Add "the Great" to magician names.

* Explain & TIP: Modifying array contents within a function demonstrates how functions can change data.
* This shows the impact of passing arrays by reference.
*/
let magicians = ["Huzaifa", "Shuja", "Bilal"];
function showMagicians(magicians) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
function makeGreat(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " Great";
  }
}
makeGreat(magicians);
showMagicians(magicians);
export {};
