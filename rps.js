//dark-light mode logic
let modeBtn = document.querySelector("#tr");
let body = document.querySelector("body")
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode ="dark";
        body.classList.add("dark")
        body.classList.remove("light")
        
    } else {
        currMode ="light";
        body.classList.add("light")
        body.classList.remove("dark")
        
    }
    console.log(currMode);
    
});

//game logic
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#i-p");
const compScorePara = document.querySelector("#ai-p");

const genChoice = () => {
const options = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};

const draw = () =>{
    //console.log("game is draw");
    msg.innerText = "The game is draw !";
    if (currMode === "dark") {
        msg.style.color = "white"; // White text in dark mode
    } else {
        msg.style.color = "black"; // Black text in light mode
    }
};


const showWinner =(userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("you win!");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;  
       //console.log("you lose");
        msg.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.color = "red";
    }
};

const play =(userChoice) => { //---
console.log("user choice =",userChoice);
const compChoice = genChoice();
console.log("computer choice =",compChoice);

if (userChoice === compChoice){
    draw();
} else {
    let userWin = true;// assume user win
    if(userChoice === "rock"){
        userWin = compChoice === "scissors"?true: false;
    } else if(userChoice ==="paper" ){
        userWin = compChoice ==="rock"?true :false;
    } else{
       userWin = compChoice === "paper"?true : false;
    }
    showWinner(userWin, userChoice, compChoice);
};
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice clicked",userChoice);
        play(userChoice);
    });
});