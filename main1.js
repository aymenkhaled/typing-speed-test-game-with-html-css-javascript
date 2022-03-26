// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];
//settings levels
const lvls = {
    "easy": 5,
    "normal": 3,
    "hard": 2
};
//default level
let defaultlevelname = "normal"; //change level from here
let defaultlevelseconds = lvls[defaultlevelname];
// catch selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// seting level name + seconds + score
lvlNameSpan.innerHTML = defaultlevelname;
secondsSpan.innerHTML = defaultlevelseconds;
timeLeftSpan.innerHTML = defaultlevelseconds;
scoreTotal.innerHTML = words.length;
//desable past event 
input.onpaste = function() {
    return false;
}
startButton.onclick = function() {
    this.remove();
    input.focus()
    genwords();
    //generate word fucntion
}

function genwords() {
    let randomword = words[Math.floor(Math.random() * words.length)];
    let wordindex = words.indexOf(randomword);
    words.splice(wordindex, 1);
    theWord.innerHTML = randomword;
    upcomingWords.innerHTML = '';
    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    startplay();
}

function startplay() {
    timeLeftSpan.innerHTML = defaultlevelseconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            clearInterval(start)
                //compare words 
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    //call generate word function
                    genwords();
                } else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spantext = document.createTextNode("congra");
                    span.appendChild(spantext);
                    finishMessage.appendChild(span);
                    upcomingWords.remove;
                }
            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spantext = document.createTextNode("game over")
                span.appendChild(spantext);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
};