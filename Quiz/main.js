const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const input = document.getElementById("answer");
const scoreEl = document.getElementById("score");
const wonEl = document.getElementById("won");

const randomNum1 = Math.ceil(Math.random()*100);
const randomNum2 = Math.ceil(Math.random()*100);

const qaMap = {
    "What two words every programmer learned to code first?": "“Hello, world.”",
    "What is the most popular programming problem?": "Missing a Semicolon.",
    "Where did programmers learn to program?": "At Stackoverflow University.",
    "What is the golden rule in programming?": "If it works, don't touch it.",
    "Why are programmers single?": "They commit their lives to code.",
    "How do programmers propose?": "They use Sudo.",
    "What is the career status of programmers?": "It's complicated.",
    "What is the biggest lie in computer programming?": "HTML is a programming language.",
    "How do programmers enjoy life?": "When they see their codes run without error.",
    "What is the greatest fear of programmers?": "When they forget to save.",
    "Can you summarize the life of programmers in four words?": "Eat. Sleep. Code. Repeat.",
    "Why do programmers keep pressing the F5 button?": "Because it's refreshing.",
    "Why are programmers multilingual?": "They are fluent in more than two languages.",
    "How programmers open a Jar?": "They use Java.",
    "As a programmer, where do you see yourself 10 years from now?": "Sitting in front of a computer, probably programming.",
    "Why should you date a programmer?": "They can give you Ruby and Perl.",
    "Why should you marry a programmer?": "They are not afraid to commit.",
    "What are the most expensive programming languages?": "Ruby, Perl, and Crystal.",
    "Why is Python slow?": "Because of IDLE.",
    "The only caffè latte drink by JavaScript developers?": "Mocha.",
    "Where do programmers hangout?": "At Stack Overflow lounge.",
    "What language is designed to make programmers happy?": "Ruby.",
    "Can you give me a programming music note?": "C#"
};  

const randomQuestion = getRandomKey(qaMap);

questionEl.innerText = `${randomQuestion}`;

let score = JSON.parse(localStorage.getItem("score"));

if(!score || score < 0) {
    score = 0;
    updateLocalStorage();
}

scoreEl.innerText = `score: ${score}/5`;


if(score >= 5) {
    wonEl.style.visibility = "visible";
    score = 0;
    updateLocalStorage();
    
    alert("Check result?");

    window.location = "../cool-video/video.html"

    scoreEl.innerText = `score: ${score}/5 - Play again?`;
}

const answer = randomNum1*randomNum2;

formEl.addEventListener("submit", () => {
    // const userInput = +input.value;
    const userInput = answer; //for testing

    if(userInput === answer) {
        score++;
        updateLocalStorage();
    }

    else {
        score--;
        updateLocalStorage();
    }

})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

function getRandomKey(collection) {
    const keys = Object.keys(qaMap);
    return keys[Math.floor(Math.random() * keys.length)];
}