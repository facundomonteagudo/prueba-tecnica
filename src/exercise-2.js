/* Given two strings, write a method to decide if they are anagrams of each other. */

const isAnagram = (stringOne, stringTwo) => {
  const arrayOne = [...stringOne];
  const arrayTwo = [...stringTwo];

  stringOne = arrayOne.sort().join("");
  stringTwo = arrayTwo.sort().join("");

  if (stringOne === stringTwo) {
    return true;
  }

  return false;
};

console.log(isAnagram("lhao", "perro"));
