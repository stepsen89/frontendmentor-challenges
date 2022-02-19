import "regenerator-runtime/runtime";
import axios from "axios";

let timeApi = "http://worldtimeapi.org/api/ip";
let quotesApi = "https://programming-quotes-api.herokuapp.com/Quotes/random";
let locationApi =
  "https://api.freegeoip.app/json/?apikey=080dafb0-90de-11ec-a4c8-338b1cebf5d9";
document.addEventListener("DOMContentLoaded", function () {
  // dom elements for quote
  let quoteText = document.querySelector("#quoteText");
  let quoteAuthor = document.querySelector("#quoteAuthor");

  // dom element to refresh the quote
  let refreshImage = document.querySelector("#refresh");

  // dom elements for greeting, time and zone in clock
  let timeDisplay = document.querySelector("#time");
  let zoneDisplay = document.querySelector("#zone");
  let greetingDisplay = document.querySelector("#greeting");

  // dom elements to interact depending on nighttime/daytime
  let dayTimeIcon = document.querySelector("#daytime-icon");
  let border = document.querySelector("#border");
  let body = document.querySelector("body");

  // dom elements for location information
  let locationDisplay = document.querySelector("#location");

  // dom element to show popup and change arrow icon, hide quote
  let moreButton = document.querySelector("#moreButton");
  let arrow = document.querySelector("#arrow");
  let popup = document.querySelector("#popup");
  let top = document.querySelector("#top");

  // dom elements in popup
  let curDay = document.querySelector("#curDay");
  let curDayOfWeek = document.querySelector("#curDayOfWeek");
  let curWeekNumber = document.querySelector("#curWeekNumber");

  // get random quote
  const getRandomQuote = async () => {
    try {
      const response = await axios.get(quotesApi, {
        accept: "application/json",
      });

      quoteText.innerHTML = `" ${response.data.en} "`;
      quoteAuthor.innerHTML = response.data.author;

      return response.data;
    } catch (errors) {
      console.error(errors);
    }
  };

  // attach random quote to the refresh icon
  refreshImage.addEventListener("click", () => getRandomQuote());

  // set current location with IP
  const getLocation = async () => {
    try {
      const response = await axios.get(locationApi, {
        accept: "application/json",
      });

      locationDisplay.innerHTML = `in ${response.data.city}, ${response.data.country_code}`;

      return response.data;
    } catch (errors) {
      console.error(errors);
    }
  };

  // set current time up to date with current time (changing automatically)
  const setCurrentTimeUpdate = () => {
    let time = new Date();
    let daytimeMatch = {
      day: {
        css: "daytime",
        icon: "daytime-icon",
        greeting: "Good Morning",
      },
      night: {
        css: "nighttime",
        icon: "nighttime-icon",
        greeting: "Good Evening",
      },
    };

    let current =
      time.getHours() <= 18 && time.getHours() >= 6
        ? daytimeMatch.day
        : daytimeMatch.night;

    let adjustMinutes =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    timeDisplay.innerHTML = `${time.getHours()}:${adjustMinutes}`;
    greetingDisplay.innerHTML = current.greeting;

    if (time.getHours() < 18 && time.getHours() >= 6) {
      dayTimeIcon.classList.add("daytime-icon");
      dayTimeIcon.classList.remove("nighttime-icon");
    } else {
      dayTimeIcon.classList.remove("daytime-icon");
      dayTimeIcon.classList.add("nighttime-icon");
      popup.classList.add("nighttime");
      border.classList.add("night");
    }
    if (time.getHours() < 18 && time.getHours() >= 6) {
      body.classList.add("daytime");
      body.classList.remove("nighttime");
    } else {
      body.classList.remove("daytime");
      body.classList.add("nighttime");
    }
  };

  // get current time api call
  const getCurrentTime = async () => {
    try {
      const response = await axios.get(timeApi, {
        accept: "application/json",
      });

      curZone.innerHTML = response.data.timezone;
      curDay.innerHTML = response.data.day_of_year;
      curWeekNumber.innerHTML = response.data.week_number;
      curDayOfWeek.innerHTML = response.data.day_of_week;
      zoneDisplay.innerHTML = response.data.abbreviation;

      return response.data;
    } catch (errors) {
      console.error(errors);
    }
  };

  moreButton.addEventListener("click", () => {
    if (popup.classList.contains("show")) {
      popup.classList.remove("show");
      top.classList.remove("hidden");
      top.classList.add("show");
      arrow.classList.remove("active");
    } else {
      arrow.classList.add("active");
      top.classList.remove("show");
      top.classList.add("hidden");
      popup.classList.add("show");
    }
  });

  setInterval(setCurrentTimeUpdate, 1000);
  getRandomQuote();
  getCurrentTime();
  getLocation();
});
