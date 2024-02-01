let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".result");

const rock = document.querySelector(".choice1");
const paper = document.querySelector(".choice2");
const scissor = document.querySelector(".choice3");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    // generating comp choice
    const compChoice = genCompChoice();

    // Visual updates based on compChoice
    if (compChoice === "rock") {
        rock.classList.remove("choice1", "choice2", "choice3");
        paper.classList.add("choice2");
        scissor.classList.add("choice3");
    } else if (compChoice === "paper") {
        paper.classList.remove("choice1", "choice2", "choice3");
        scissor.classList.add("choice3");
        rock.classList.add("choice1");
    } else {
        scissor.classList.remove("choice1", "choice2", "choice3");
        rock.classList.add("choice1");
        paper.classList.add("choice2");
    }

    let userWin = true;
    if (userChoice === compChoice) {
        // game draw situation 
        drawGame();
    } else {
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        };

        showWinner(userWin, userChoice, compChoice);
    }
};


const showWinner = (userWin , userChoice , compChoice )=> {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win !";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lost !"
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText = "it was a draw"
    msg.style.backgroundColor = "rgb(43, 134, 156)"
}