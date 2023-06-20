const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

function setTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDeg = (hours / 12) * 360 + minutes / 2 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  const minutesDeg = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;

  const secondsDeg = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondsDeg}deg)`;
}

setInterval(setTime, 1000);
