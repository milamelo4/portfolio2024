document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  let periodDays = JSON.parse(localStorage.getItem("periodDays")) || [];

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.className = "day";
    day.textContent = i;
    day.dataset.day = i;
    if (periodDays.includes(i)) {
      day.classList.add("selected");
    }
    day.addEventListener("click", () => toggleDay(day));
    calendar.appendChild(day);
  }

  function toggleDay(day) {
    const dayNumber = parseInt(day.dataset.day, 10);
    if (periodDays.includes(dayNumber)) {
      periodDays = periodDays.filter((d) => d !== dayNumber);
      day.classList.remove("selected");
    } else {
      periodDays.push(dayNumber);
      day.classList.add("selected");
    }
    localStorage.setItem("periodDays", JSON.stringify(periodDays));
  }
});
const weatherDiv = document.getElementById("weather");

async function getWeather() {
    let url =
      "https://api.openweathermap.org/data/2.5/forecast/?q=Salt+Lake+City,Ut,Us&units=imperial&appid=0a70f34193d2de88ea8b87770197b319";
  try {
    const response = await fetch(
      url
    );
    const data = await response.json();
    console.log(data)
    weatherDiv.innerHTML = `<p>${data.city.name}</p>
     <p>${data.list[0].main.temp}</p>
     <p>${data.list[0].weather[0].main}</p>`;
      } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();

const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");
const pastPeriodContainer = document.getElementById("past-periods");

// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  alert('ok')
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;
  if (checkDatesInvalid(startDate, endDate)) {
    return;
  }
  storeNewPeriod(startDate, endDate);
  renderPastPeriods();
  newPeriodFormEl.reset();
});

function checkDatesInvalid(startDate, endDate) {
  if (!startDate || !endDate || startDate > endDate) {
    newPeriodFormEl.reset();
    return true;
  }
  return false;
}

function storeNewPeriod(startDate, endDate) {
  const periods = getAllStoredPeriods();
  periods.push({ startDate, endDate });
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  const data = window.localStorage.getItem(STORAGE_KEY);
  const periods = data ? JSON.parse(data) : [];
  console.dir(periods);
  console.log(periods);
  return periods;
}

function renderPastPeriods() {
  const pastPeriodHeader = document.createElement("h2");
  const pastPeriodList = document.createElement("ul");
  const periods = getAllStoredPeriods();
  if (periods.length === 0) {
    return;
  }
  
  pastPeriodHeader.innerHTML = "Past periods";
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}

renderPastPeriods();


