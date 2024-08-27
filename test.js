const readline = require('readline');

const texts = [
  "The quick brown fox jumps over the lazy dog.",
  "Many small steps can conquer the highest mountain.",
  "A journey of a thousand miles must begin with a single step.",
  "Not all those who wander are lost."
];

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}

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

    const startTime = process.hrtime();
    const text = getRandomText();

    rl.question(text + "\n", (userInput) => {
      const endTime = process.hrtime(startTime);
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
