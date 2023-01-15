const someUselessFunction = (uselessVariable) => {
  console.log(`I am useless : ${uselessVariable}`);
};

const butINeedThisBefore = () => "I am useless too";

console.log(someUselessFunction(butINeedThisBefore()));
