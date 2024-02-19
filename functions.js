let [seconds, minutes, hours, milisec] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
  //We calculate the number of miliseconds, seconds, minutes and hours
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
  //We update the format to have an extra zero if the number shown is just a digit EX: 7 -> 07
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
  //Here we specify the number of miliseconds we want to show
  //If 10 miliseconds have passed, then the last digit of miliseconds is increased by 1
  //Because we have 100 on the stopwatch, and there are 1000 miliseconds in a second
  //If we want a display of 1000, then we leave there (stopwatch, 1)
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
//The snack bar notification
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
