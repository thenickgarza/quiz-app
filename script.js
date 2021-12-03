const startButton = document.querySelector(".start-btn")
const questionContainerElement = document.getElementById(".question-container")
const questionElement = document.getElementById('question')
let shuffledQuestions, currentQuestionIndex  
const answerButtonElement = document.querySelector(".btn-grid")
const questions = shuffledQuestions
startButton.addEventListener("click", startGame)


function startGame () {
     console.log ("started");
     startButton.remove()
     shuffledQuestions = question.sort(() => Math.random() - .5)
     console.log(shuffledQuestions);
     currentQuestionIndex = 0
     console.log(currentQuestionIndex)
     setNextQuestion ()
     selectAnswer()
}
function showQuestion () {
     questionElement.innerHTML = question[0].question
     console.log(question)
}

function setNextQuestion() {
     showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer () {
    answerButtonElement.innerHTML = question[0].answers[0].text
    console.log(answerButtonElement)
}

var question = [
    {
        question: 'test question',
        answers: [
            { text: "test answer 1", correct: true },
            { text: "test ansswer 2", correct: false },
            { text: "test answer 3", correct: false },
            { text: "test answer 4", correct: false}
            ]
    },
    {
     question: 'test question',
     answers: [
         { text: "test answer 1", correct: true },
         { text: "test ansswer 2", correct: false },
         { text: "test answer 3", correct: false },
         { text: "test answer 4", correct: false}
         ]
     },
     {
          question: 'test question',
          answers: [
              { text: "test answer 1", correct: true },
              { text: "test ansswer 2", correct: false },
              { text: "test answer 3", correct: false },
              { text: "test answer 4", correct: false}
              ]
      },
      {
          question: 'test question',
          answers: [
              { text: "test answer 1", correct: true },
              { text: "test ansswer 2", correct: false },
              { text: "test answer 3", correct: false },
              { text: "test answer 4", correct: false}
              ]
      }
]

// var score = 0

// var questions = [
//     {
//         questions: "test question",
//         answers: [
//             { text: "test answer", correct: true},
//             { text: "test answer", correct: false}
//         ]
//     }
// ]

// var startButton = document.querySelector('.start-btn')
// startButton.addEventListener("click", startGame)

// var questionElement = document.querySelector(".starting-q")

// let shuffledQuestions, currentQuestionIndex



// function startGame () {
//     console.log('started')
//     startButton.remove()
//     questionElement.remove()
//     // shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0 
//     showQuestion()

// }

// function setwNextQuestion () {
//     // showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion () {
// questionElement.innerText = questions
// }