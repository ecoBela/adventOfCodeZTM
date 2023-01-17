const fs = require("fs");
// 1. Which floor is Santa on? In the attached data file "(" means +1; and ')' means -1.  Read
// the file and work out which floor Santa is on if he starts his journey on the ground floor.
// Use node to read the file  CORRECT ANSWER: 74

fs.readFile("./data.txt", (err, data) => {
  console.time("Fun exercise");

  let openBracketCount = 0;
  let closedBracketCount = 0;
  const parsedData = data.toString();
  const arrayData = parsedData.split("");
  arrayData.map((item) => {
    if (item === "(") {
      openBracketCount++;
    }
    if (item === ")") {
      closedBracketCount++;
    }
  });

  console.log(openBracketCount - closedBracketCount); // This returns 74

  let floor = 0;
  arrayData.some((item, index) => {
    if (item === "(") {
      floor++;
    }
    if (item === ")") {
      floor--;
    }
    if (floor === -1) {
      //   console.log(item, index);
      console.log(index + 1, "position"); // this returns 1795
    }
    return floor === -1; // exits function when this condition is first met
  });

  //   map over each item; for each item in the array, if '(' then
  // let floor =+ 1; check the value of floor.if floor = -1 then
  // console log the item and the index position of that item
  // and if ')' then let floor =- 1
  //
  //

  console.timeEnd("Fun exercise");
});

// What is the position of the character that gets Santa to the basement for the first time?
// Correct Answer: 1795
