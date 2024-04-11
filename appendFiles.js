const fs = require("node:fs");

// Synchronous file append:
// fs.appendFileSync("./file1.txt", "\nLearning node js", "utf-8");

// Asynchronous file appending with callback function:
fs.appendFile("./file1.txt", "\nLearning file systems", "utf8", (err) => {
  if (err) throw err;
  //  If no error
  console.log("Data is appended to file successfully.");
});
