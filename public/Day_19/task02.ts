/*
* Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

* Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
*/

function keepOnlyString(items: any[]): string[] {
  return items.filter((item) => typeof item === "string");
}

const mixedItems: any[] = [
  1,
  "huzaifa",
  true,
  "shuja",
  false,
  undefined,
  "moiz",
];
const onlyString: string[] = keepOnlyString(mixedItems);

console.log(onlyString);
