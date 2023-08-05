// Import readline
const readline = require("readline");
// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Declare empty object to store answers
let answers = {};

// Callback hell
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answers.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers.music = answer;
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        (answer) => {
          answers.meal = answer;
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (answer) => {
              answers.food = answer;
              rl.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  answers.sport = answer;
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (answer) => {
                      answers.superpower = answer;
                      console.log("Here's your online profile: ");
                      console.log(
                        `${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}.`
                      );
                      // Close readline interface after done
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
