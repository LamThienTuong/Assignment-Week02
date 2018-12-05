const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
const chalk = require("chalk");

readline.question("What's your name ?\n", name => {
  readline.question("What's your year of birth ?\n", yob => {
    age = 2018 - yob;
    readline.question("What's your home town ?\n", homeTown => {
      console.log(
        chalk.blue(
          `Thank you. Hello ${name},so you are ${age} year old and from ${homeTown}.`
        )
      );
      readline.close();
    });
  });
});
