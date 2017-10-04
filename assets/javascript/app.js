// To-do:
// -get myQuestions array to display in html instead of console
// -make timer start on click
// -make timer update/display time remaining
// -write conditional for correctAnswer: track user input (radio buttons), compare if input=correctAnswer, if true correct++ else incorrect++ 

 var correct
 var incorrect
 
//  Start on click.
var start;

function starter() {
    start = setTimeout(function(){ alert("Time's up") }, 1000 * 30);
    $("#time").html(start);
}


function game() {

  var quizContainer = $("#quiz");
  var resultsContainer = $("#results");
  var submitButton = $("#submit");
  var myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];
  console.log(myQuestions);
};
game();

