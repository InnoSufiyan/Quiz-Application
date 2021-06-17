var exam = [
  {
    question: "What is the total area of Punjab Province?",
    option: {
      a: "74,521 Km",
      b: "347,190 Sq Km",
      c: "205,344 Sq Km",
    },
    correctAnswer: "205,344 Sq Km",
  },
  {
    question: "Who is the current Test Captain of Pakistani Team",
    option: {
      a: "Babar Azam",
      b: "Sarfaraz Ahmed",
      c: "Muhammad Rizwan",
    },
    correctAnswer: "Babar Azam",
  },
  {
    question: "How many provinces Pakistan have",
    option: {
      a: "6",
      b: "5",
      c: "4",
    },
    correctAnswer: "5",
  },
  {
    question: "Who was the founder of Daily English Newspaper Dawn?",
    option: {
      a: "Liaquat Ali Khan",
      b: "Quaid-e-Azam",
      c: "None of Them",
    },
    correctAnswer: "Quaid-e-Azam",
  },
  {
    question: "Who is the current Prime Minister of Pakistan",
    option: {
      a: "Waqar Zaka",
      b: "Imran Khan",
      c: "Sarfaraz Ahmed",
    },
    correctAnswer: "Imran Khan",
  },
  {
    question: "The 1962 Constitution of Pakistan was passed during the regime of?",
    option: {
      a: "Ayoub Khan",
      b: "Sikandar Mirza",
      c: "Muhammad Amir",
    },
    correctAnswer: "Ayoub Khan",
  },
  {
    question: "The third largest city of Pakistan is",
    option: {
      a: "Karachi",
      b: "faisalabad",
      c: "sukkur",
    },
    correctAnswer: "faisalabad",
  },
  {
    question: "Who was the hero of Pak India 1965 war?",
    option: {
      a: "Major Raja Aziz Bhatti",
      b: "Aamir Liaquat",
      c: "Humayun Saeed",
    },
    correctAnswer: "Major Raja Aziz Bhatti",
  },
  {
    question: "National code of Pakistan is?",
    option: {
      a: "PAK",
      b: "PK",
      c: "None of them",
    },
    correctAnswer: "PK",
  },
  {
    question: "Defence day is observed on ___________ ?",
    option: {
      a: "14 Feb",
      b: "14 August",
      c: "6 September",
    },
    correctAnswer: "6 September",
  },
];

var questionFromDocument = document.getElementById("questionPortion");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var button = document.getElementById("button");
var count = 0;
var a;
var b;
b = document.getElementsByClassName('selected');
var myLis = document.getElementsByTagName('li');
var myUL = document.getElementsByTagName('ul');
var score = 0;
var correctAnswers = 0

window.onload = function () {
  for(i=0; i<myLis.length; i++) {
    myLis[i].style.transform = "translateY(0%)";
    myLis[i].style.transitionDelay = "0.3s";
  }
  questionFromDocument.innerText = exam[count].question;
  option1.innerText = exam[count].option.a;
  option2.innerText = exam[count].option.b;
  option3.innerText = exam[count].option.c;
};

function optionSelected(e) {
  a = document.getElementsByTagName('li');
  a[0].classList.remove('selected');
  a[1].classList.remove('selected');
  a[2].classList.remove('selected');
  e.classList.add('selected');
}


function next() {
  if (document.getElementsByClassName('selected')[0] != undefined) {
    count++
    if(b[0].innerText == exam[count-1].correctAnswer) {
      b[0].classList.add('answerCorrect');
      score = score + 10;
      correctAnswers = correctAnswers + 1;
      console.log(score);
      console.log(correctAnswers);
      
    } else {
      b[0].classList.add('answerWrong');
    }
    
    for(var i=0; i<myLis.length; i++) {
      myLis[i].style.transform = "translateY(1000%)";
    }
    setTimeout(function() {
      
      for(j=0; j<myLis.length; j++) {
        myLis[j].style.transform = "translateY(0%)";
      }
      b[0].classList.remove('answerCorrect', 'selected', 'answerWrong')
      
      if(count < exam.length-1 && count != exam.length) {
        questionFromDocument.innerText = exam[count].question;
        option1.innerText = exam[count].option.a;
        option2.innerText = exam[count].option.b;
        option3.innerText = exam[count].option.c;
      } else if ( count < exam.length) {
        questionFromDocument.innerText = exam[count].question;
        option1.innerText = exam[count].option.a;
        option2.innerText = exam[count].option.b;
        option3.innerText = exam[count].option.c;
        button.innerText = "Finish"
        button.setAttribute('onClick', 'finish()');
      }
    },800)
    
  }
}


function finish() {
  count++
  if(b[0].innerText == exam[count-1].correctAnswer) {
    b[0].classList.add('answerCorrect');
    score = score + 10;
    correctAnswers = correctAnswers + 1;
    console.log(correctAnswers);
    console.log(score);

  } else {
    b[0].classList.add('answerWrong');
  }
  
  for(var i=0; i<myLis.length; i++) {
    myLis[i].style.transform = "translateX(-1000%)";
  }
  setTimeout(function() {
    document.getElementById("questionPortion").innerHTML = "You scored " + score;
    document.getElementById("questionPortion").style.fontSize = "50px"
    button.style.visibility = "hidden";
    for(j=0; j<myLis.length; j++) {
      option1.innerText = "Total number of Questions: " + "'" + exam.length + "'";
      option2.innerText = "Total Correct Answers: " + "'" + correctAnswers + "'";
      option3.innerText = "Wrong Answers: " + "'" + (exam.length - correctAnswers) + "'";
      myLis[j].style.transform = "translateY(0%)";
    }
    b[0].classList.remove('answerCorrect', 'selected', 'answerWrong')
    for(var i=0; i<myLis.length; i++) {
      // myLis[i].style.transform = "translateY(1000%)";
    }
    
    },500)
  
}






