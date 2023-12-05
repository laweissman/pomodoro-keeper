let sessionLength = 25;
let breakLength = 5;
let isSession = true;
let timerInterval;
let timeLeft = sessionLength * 60;

document.getElementById('start-pause-btn').addEventListener('click', startPauseTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
document.getElementById('session-length').addEventListener('change', function() {
    sessionLength = this.value;
    resetTimer();
});
document.getElementById('break-length').addEventListener('change', function() {
    breakLength = this.value;
});

function startPauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    } else {
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    timeLeft--;
    if (timeLeft < 0) {
        isSession = !isSession;
        timeLeft = (isSession ? sessionLength : breakLength) * 60;
    }
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = sessionLength * 60;
    document.getElementById('timer').textContent = "25:00";
}
