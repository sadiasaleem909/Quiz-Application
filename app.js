const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    option1: "script",
    option2: "javascript",
    option3: "js",
    correctOption: "script",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    option1: "The head section",
    option2: "The body section",
    option3: "Both the head and body section are correct",
    correctOption: "Both the head and body section are correct",
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    option1: "script href=xxx.js",
    option2: "script name=xxx.js",
    option3: "script src=xxx.js",
    correctOption: "script src=xxx.js",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    option1: 'alert("Hello World");',
    option2: 'msg("Hello World");',
    option3: 'alertBox("Hello World");',
    correctOption: 'alert("Hello World");',
  },
  {
    question: "How do you create a function in JavaScript?",
    option1: "function = myFunction()",
    option2: "function myFunction()",
    option3: "create myFunction()",
    correctOption: "function myFunction()",
  },
  {
    question: "How do you call a function named myFunction?",
    option1: "call myFunction()",
    option2: "myFunction()",
    option3: "function myFunction()",
    correctOption: "myFunction()",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    option1: "var myVariable;",
    option2: "variable myVariable;",
    option3: "v myVariable;",
    correctOption: "var myVariable;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    option1: "==",
    option2: "=",
    option3: "===",
    correctOption: "=",
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    option1: "<!-- This is a comment -->",
    option2: "// This is a comment",
    option3: "** This is a comment",
    correctOption: "// This is a comment",
  },
  {
    question: "Which method is used to find an HTML element by its ID?",
    option1: "document.getElementById()",
    option2: "document.getElement()",
    option3: "document.getById()",
    correctOption: "document.getElementById()",
  },
];
let quizbox = document.querySelector("#quizBox")

let nextBtn = document.querySelector("#nextBtn")
let questionNo = 0
let  score = 0
const showQuestion = ()=>{
  if(questionNo != questions.length){
    quizbox.innerHTML = `<h3> ${questionNo + 1} : ${questions[questionNo].
      question}</h3>
      <label> 
          <input type="radio" name="options" value="${questions[questionNo].option1}" />
          ${questions[questionNo].option1}
      </label>
      <br />
      <br />
      <label> 
          <input type="radio" name="options" value="${questions[questionNo].option2}" />
          ${questions[questionNo].option2}
      </label>
      <br />
      <br />
      <label> 
          <input type="radio" name="options" value="${questions[questionNo].option3}" />
          ${questions[questionNo].option3}
      </label>
      <br />
      <br />
      
      `
      
      nextBtn.disabled = true

      const options = document.querySelectorAll("input")
      
      options.forEach((Option) =>{
        Option.addEventListener("click", ()=>{
          nextBtn.disabled = false
          if(Option.value === questions[questionNo].correctOption){
            score++
          }
        })
      })
  } 
  else{
    let percentage = (score /questions.length *100)
    nextBtn.style.display = "none"
quizbox.innerHTML=`quiz ended score:${score} ${percentage}%`
}
};
showQuestion()
nextBtn.addEventListener("click",()=>{
  questionNo++
  showQuestion()
})