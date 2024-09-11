/*
 * Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
 * Explain & TIP: When you have more space, you can add more guests to your list.
 * You can add guests at the beginning, middle, and end of an array.
 */

const guestArray: string[] = ["Hamza", "Haris", "Mudassir"];

const personNotComingSix: number = guestArray.indexOf("Mudassir");
const replacementGuestSix: string = "Taha";

if (personNotComingSix !== -1) {
  guestArray[personNotComingSix] = replacementGuestSix;
}

for (let i = 0; i < guestArray.length; i++) {
  console.log(`Hello ${guestArray[i]}, you are invited to the dinner`);
}

console.log("\nGreat news! I found a bigger dinner table! \n");

// Lets add more guestArrays
guestArray.unshift("Faisal"); // add guestArray at beginning
guestArray.splice(guestArray.length / 2, 0, "Fahad"); // add guestArray at middle
guestArray.push("Bilal"); // add guestArray at end

for (let i = 0; i < guestArray.length; i++) {
  console.log(`Hello ${guestArray[i]}, you are invited to the dinner`);
}
