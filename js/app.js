var questions = [
    {
      questionText: "אני _ שיניים בבוקר ",
      chose: ["מנקה", "שוטף", "מצחצח", "משמשף"],
      answer: 3,
    },
    {
        questionText: "אני _ ידיים במים וסבון",
      chose: ["שוטף", "משמשף", "מצחצח", "מנקה"],
      answer: 3,
    },
    {
        questionText: "אני _ חולצה קצרה בקיץ",
      chose: ["מנקה", "לובש", "מצחצח", "שם"],
      answer: 3,
    },
    {
      questionText: "אני _ שיניים בבוקר ",
      chose: ["מנקה", "שוטף", "מצחצח", "משמשף"],
      answer: 3,
    },
    {
      questionText: "אני _ שיניים בבוקר ",
      chose: ["מנקה", "שוטף", "מצחצח", "משמשף"],
      answer: 3,
    },
    {
      questionText: "אני _ שיניים בבוקר ",
      chose: ["מנקה", "שוטף", "מצחצח", "משמשף"],
      answer: 3,
    },
    {
        questionText: "אני _ ידיים במים וסבון",
      chose: ["שוטף", "משמשף", "מצחצח", "מנקה"],
      answer: 3,
    },
    {
        questionText: "אני _ חולצה קצרה בקיץ",
      chose: ["מנקה", "לובש", "מצחצח", "שם"],
      answer: 3,
    },
    {
      questionText: "אני _ שיניים בבוקר ",
      chose: ["מנקה", "שוטף", "מצחצח", "משמשף"],
      answer: 3,
    },
    {
      questionText: "אני _ שיניים בבוקר ",
      chose: ["מנקה", "שוטף", "מצחצח", "משמשף"],
      answer: 3,
    },

  ]
var glob = 1
var img = document.getElementById('img');
img.style.display = 'none';
var rightansware=0;
var ScoreElement = document.getElementById('currScore');
var btnarry=[4];
let q = document.getElementById('question');

var answer;

function makeQustion() //start problem
{
        q.textContent = questions[glob].questionText;
        // q.textContent = question.txt;
        answer = questions[glob].answer;
        for(let i=0 ; i < 4 ; i++)
        {
            btnarry[i] = document.getElementById('btn'+i);
            btnarry[i].textContent = questions[glob].chose[i];
        }
    
}   

function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.display = (visible ? 'block' : 'none');
}

function AddScore()
{
    rightansware++;
    ScoreElement.textContent=rightansware;
    glob++;
}

//Check button
function checkans(btnid) {
    if (btnid.id === 'btn' + answer) {
        document.getElementById(btnid.id).style.backgroundColor = 'green';
        AddScore()
        makeQustion();
    }
    else {
        document.getElementById(btnid.id).style.backgroundColor = 'red';
        document.getElementById('btn'+answer).style.backgroundColor = 'green';
        AddScore()
        makeQustion();
    }
}

// Timer //
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('.time');
    startTimer(oneMinute, display);
    makeQustion();
};
