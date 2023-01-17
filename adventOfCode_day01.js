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
  return openBracketCount - closedBracketCount;
});

// how to count the instances of each open bracket and each closing bracket
// store each count
// subtrack the closing from the opening counts
// answer tells you the floor that santa is in
