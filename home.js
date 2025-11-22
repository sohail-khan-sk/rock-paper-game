let user = 0;
let comp = 0;

const option = document.querySelectorAll(".opt");
const result  = document.querySelector("#p");
const you = document.querySelector("#you")
const cp = document.querySelector("#comp");



const drawGame = () =>{
    console.log("game was draw...");
    result.innerText = "that's a draw!"
            result.style.backgroundColor = "yellow";

}

const genCompOption = () =>{
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() *3);
    return options[randInd];
}

const showWinner = (userWin) =>{
    if (userWin) {
        user++;
        you.innerText = user;
        result.innerText = "you win the match!"
        result.style.backgroundColor = "green";
        
    } else {
        comp++;
        cp.innerText = comp;
        result.innerText = "you loss the match! try again"
        result.style.backgroundColor = "red";
    }
}

const playGame = (optId) =>{
    console.log("user option :", optId);
    const compChoice =genCompOption();
    console.log("computer choice :", compChoice);
    
    if (compChoice === optId) {
        drawGame();
    }
    else{
        let userWin = true;
        if (optId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(option === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

option.forEach((opt) =>{
    // console.log(opt);
    opt.addEventListener("click", () =>{
        const optId = opt.getAttribute("id");
        // console.log("option was clicked", optId);
        playGame(optId);
        
    })
})






