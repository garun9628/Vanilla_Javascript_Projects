const hour = document.getElementsByClassName("hour");
const minute = document.getElementsByClassName("min");
const seconds = document.getElementsByClassName("sec");
const amPm = document.getElementsByClassName("ampm");

// Add 0 to the begining of number if less than 10
function formatTime(time) {
  return time.toString();
}

function isAmPm(hours) {
  return hours >= 12 ? "PM" : "AM";
}

function clock() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  hour[0].textContent = formatTime(h);
  minute[0].textContent = formatTime(m);
  seconds[0].textContent = formatTime(s);
  amPm[0].textContent = isAmPm(h);
}

setInterval(clock, 1000);
