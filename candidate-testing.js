const { TransformStreamDefaultController } = require('node:stream/web');
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
const question = "Who was the first American woman in space? "; 
const correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
const questions = ["Who was the first American woman in space? " , 
"True or false: 5 kilometer == 5000 meters? " , 
"(5 + 3)/2 * 10 = ? " , 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " ,
 "What is the minimum crew size for the ISS? "
];
const correctAnswers = ["Sally Ride" , 
"true" , 
"40" , 
"Trajectory" , 
"3"
];
let candidateAnswers = [];
let answers = ""

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name?");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let index = 0; index < questions.length; index++) {
    console.log(`${questions[index]}`);
    answers = input.question("");
    candidateAnswers.push(answers);
}
 
console.log(candidateAnswers);

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let correctCandidateAnswers = [];
  let incorrectCandidateAnswers = [];
  for (let index = 0; index < candidateAnswers.length; index++) {
    if (candidateAnswers[index].toLowerCase() === correctAnswers[index].toLowerCase()) {
      console.log("Correct");
      correctCandidateAnswers.push(candidateAnswers[index]);
    } else {
      console.log("Incorrect");
      incorrectCandidateAnswers.push(candidateAnswers[index]);
    }
  }

  console.log(correctCandidateAnswers);
  console.log(incorrectCandidateAnswers);

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

grade = (correctCandidateAnswers.length/5) * 100;
  console.log(grade);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello," , candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};