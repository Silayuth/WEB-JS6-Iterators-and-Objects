function printFinishMessage() {
  console.log("I have finished printing numbers.");
}

function step1(number, callback) {
  console.log("The number you provided is: " + number);
  // step 2: call callback function
  callback();
}

// step 1: call step1 function with printFinishMessage as input
step1(6, printFinishMessage);