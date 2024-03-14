let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let start = document.getElementById("start");
let stops = document.getElementById("stop");
let reset = document.getElementById("reset");

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + " : " + m + " : " + s;
}
function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00 : 00 : 00";
  clearInterval(timer);
}

start.addEventListener("click", () => {
  watchStart();
});

stops.addEventListener("click", () => {
  watchStop();
});
reset.addEventListener("click", () => {
  watchReset();
});
