const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#timeLeft");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare(){
    square.forEach(className => {
        className.classList.remove("mole");
        className.classList.remove("hit");
    });
    let randomPosition = square[Math.floor(Math.random()*9)];
    randomPosition.classList.add("mole");

    //assign the id och the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener("mouseup", () => {
        if(id.id === hitPosition){
            result++;
            score.textContent = result;
            id.classList.remove("mole");
            id.classList.add("hit");
        }
    })
})

function moveMole(){
    let timerId;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime===0){
        clearInterval(timerId);
        alert("Game Over! Your score is: "+result);
    }
}

let timerId = setInterval(countDown, 1000)