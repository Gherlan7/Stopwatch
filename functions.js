let [seconds, minutes, hours, milisec] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
  milisec++;
  if (milisec == 100) {
    milisec = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let milis = milisec < 10 ? "0" + milisec : milisec;
  displayTime.innerHTML = h + ":" + m + ":" + s + ":" + milis;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 10);
}
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours, milisec] = [0, 0, 0, 0];
  displayTime.innerHTML = "00:00:00:00";
}
let toastBox = document.getElementById("toastBox");
let startMsg =
  '<i class="fa-solid fa-stopwatch"></i>You have started the watch !';
let stopMsg = '<i class="fa-solid fa-stop"></i>You have stopped the watch !';
let resetMsg =
  '<i class="fa-solid fa-backward"></i>You have restarted the watch !';
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (msg.includes("stopped")) {
    toast.classList.add("stopped");
  }
  if (msg.includes("restarted")) {
    toast.classList.add("restarted");
  }
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
