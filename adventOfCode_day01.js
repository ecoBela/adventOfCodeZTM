const fs = require("fs");
// 1. Which floor is Santa on? In the attached data file "(" means +1; and ')' means -1.  Read
// the file and work out which floor Santa is on if he starts his journey on the ground floor.
// Use node to read the file  CORRECT ANSWER: 74

fs.readFile("./data.txt", (err, data) => {
  console.time("Fun exercise Q1");
  let bracketCount = 0;
  const parsedData = data.toString();
  const arrayData = parsedData.split("");
  arrayData.map((item) => {
    if (item === "(") {
      bracketCount++;
    } else if (item === ")") {
      bracketCount--;
    }
  });
  console.log("floor: ", bracketCount); // This returns...74
  console.timeEnd("Fun exercise Q1");
  console.time("Fun exercise Q2");
  let floor = 0;
  arrayData.some((item, index) => {
    if (item === "(") {
      floor++;
    } else if (item === ")") {
      floor--;
    }
    floor === -1 && console.log("position: ", index + 1); // this returns 1795
    return floor === -1; // exits function when this condition is first met
  });

  console.timeEnd("Fun exercise Q2");
});

// What is the position of the character that gets Santa to the basement for the first time?
// Correct Answer: 1795
