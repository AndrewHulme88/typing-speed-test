const readline = require('readline');

// Create readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.write("Welcome to the JavaScript Typing Speed Test.\n");
rl.write("\nGet Ready in 2 seconds...\n");
setTimeout(() => {
  rl.write("1...\n");
  setTimeout(() => {
    rl.write("GO!\n");

    // Start time
    const startTime = process.hrtime();

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                 "elit, sed do eiusmod tempor incididunt ut labore et " +
                 "dolore magna aliqua. Ut enim ad minim veniam, quis " +
                 "nostrud exercitation ullamco laboris nisi ut aliquip " +
                 "ex ea commodo consequat. Duis aute irure dolor in " +
                 "reprehenderit in voluptate velit esse cillum dolore eu " +
                 "fugiat nulla pariatur. Excepteur sint occaecat cupidatat " +
                 "non proident, sunt in culpa qui officia deserunt " +
                 "mollit anim id est laborum.";

    // Prompt for user input
    rl.question(text, (userInput) => {
      const endTime = process.hrtime(startTime);

      // Calculate total time in seconds
      const totalTimeInSeconds = (endTime[0] + endTime[1] / 1e9);

      const totalWords = text.split(/\s+/);
      const userWords = userInput.trim().split(/\s+/);
      const correctWords = userWords.filter(word => totalWords.includes(word)).length;

      const wpm = calculateWPM(correctWords, totalTimeInSeconds);
      const accuracy = calculateAccuracy(correctWords, totalWords.length);

      rl.write(`\nWords Typed: ${correctWords}\n`);
      rl.write(`WPM: ${wpm}\n`);
      rl.write(`Accuracy: ${accuracy}%\n`);
      rl.close();
    });

  }, 1000);
}, 1000);

function calculateWPM(correctWords, totalTime) {
  return ((correctWords / totalTime) * 60).toFixed(2);
}

function calculateAccuracy(correctWords, totalWords) {
  return ((correctWords / totalWords) * 100).toFixed(2);
}
