let seconds = 0;
let ms = 0;
let appendSeconds = document.querySelector("#seconds");
let appendMS = document.querySelector("#milli_seconds");
let startBtn = document.querySelector("#start_button");
let stopBtn = document.querySelector("#stop_button");
let resetBtn = document.querySelector("#reset_button");
let Interval;

const startTimer = () => {
  ms++;
  if (ms <= 9) {
    appendMS.innerHTML = "0" + ms;
  }
  if (ms > 9) {
    appendMS.innerHTML = ms;
  }
  if (ms > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    (ms = 0), (appendMS.innerHTML = "0" + 0);
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
};

startBtn.onclick = () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

stopBtn.onclick = () => {
  clearInterval(Interval);
};

resetBtn.onclick = () => {
  clearInterval(Interval);
  ms = "00";
  seconds = "00";
  appendMS.innerHTML = ms;
  appendSeconds.innerHTML = seconds;
};
