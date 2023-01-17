const fs = require("fs");

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

  console.log(openBracketCount - closedBracketCount);
  console.timeEnd("Fun exercise");
});

// Which floor is Santa on? In the attached data file "(" means +1; and ')' means -1.  Read
// the file and work out which floor Santa is on if he starts his journey on the ground floor.
// Use node to read the file
