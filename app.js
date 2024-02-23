let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choice = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const drawGame = () => {
    msg.innerText = "Game is Draw. Try again.";
    msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rndIdx = Math.floor(Math.random() * 3);
    return options[rndIdx];
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "Yaa!! You won.";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "Oh no!! You lost";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})



