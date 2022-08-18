const calendarValue = document.querySelector("#calendar");
const calendarSubmit = document.querySelector("#calendar-submit");

const todayDate = new Date();
const todayYear = todayDate.getFullYear().toString();
const todayMonth = (todayDate.getMonth() + 1).toString();
const todayDay = todayDate.getDate().toString();

let todayMonthString = todayMonth.padStart(2, "0");
let todayDayString = todayDay.padStart(2, "0");

const calendarValueString = `${todayYear}-${todayMonthString}-${todayDayString}`;
calendarValue.value = calendarValueString;

function handleCalendarSubmit(event) {
  event.preventDefault();
  document.querySelector("#workout-table").classList.remove("hidden");
  document.querySelector("#table-button").classList.remove("hidden");
}

calendarSubmit.addEventListener("click", handleCalendarSubmit);
