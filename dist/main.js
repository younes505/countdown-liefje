const countdown = () => {
  const countDate = new Date("March 4, 2022 00:00:00").getTime();
  const now = new Date();
  const gap = countDate - now;

  // time variables
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculations
  let countDays = Math.floor(gap / day);
  let countHours = Math.floor((gap % day) / hour);
  let countMinutes = Math.floor((gap % hour) / minute);
  let countSeconds = Math.floor((gap % minute) / second);

  // display calculations
  document.querySelector(".days").textContent = countDays;
  document.querySelector(".hours").textContent = countHours;
  document.querySelector(".minutes").textContent = countMinutes;
  document.querySelector(".seconds").textContent = countSeconds;

  if (gap < 0) {
    document.querySelector("event").textContent = "Happy Birthday!!!";
    clearInterval(timerId);
    return;
  }
};

const timerId = setInterval(() => {
  countdown();
}, 1000);
