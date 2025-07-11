let startTime, timerInterval;
let elapsed = 0;
let running = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTimerDisplay() {
  const total = elapsed + (running ? Date.now() - startTime : 0);
  const seconds = Math.floor(total / 1000);
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  timerDisplay.textContent = `${h}:${m}:${s}`;
}

startBtn.onclick = () => {
  if (!running) {
    running = true;
    startTime = Date.now();
    timerInterval = setInterval(updateTimerDisplay, 1000);
  }
};

pauseBtn.onclick = () => {
  if (running) {
    running = false;
    elapsed += Date.now() - startTime;
    clearInterval(timerInterval);
  }
};

resetBtn.onclick = () => {
  running = false;
  elapsed = 0;
  clearInterval(timerInterval);
  updateTimerDisplay();
};

updateTimerDisplay();

