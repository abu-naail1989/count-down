const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format");

let futureDate = new Date(2022, 11, 20, 23, 59, 59);
console.log(futureDate);

const year = futureDate.getFullYear();

const month = months[futureDate.getMonth()];

const date = futureDate.getDate();

const day = weekdays[futureDate.getDay()];

const hours = futureDate.getHours();

const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day} ${date}th  ${month}, ${year} ${hours}:${minutes}pm`;
