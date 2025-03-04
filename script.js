let timer;
let timeLeft = 25 * 60; 
let isRunning = false;
let bellSound = new Audio("bell-ringing-67099.mp3");

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const breakButton = document.getElementById("break");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                bellSound.play();
                clearInterval(timer);
                isRunning = false;
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    updateDisplay();
}

function breakTimer() {
    clearInterval(timer);
    timeLeft = 4; 
    isRunning = true;
    updateDisplay(); 

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            bellSound.play();
            clearInterval(timer);
            isRunning = false; 
            alert("Break time is up! Get to work, girl! 💪");
            resetTimer();
        }
    }, 1000);
}


startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
breakButton.addEventListener("click", breakTimer);

updateDisplay();
