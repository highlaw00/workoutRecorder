const calendarValue = document.querySelector("#calendar");
const todayDate = new Date();
const todayYear = todayDate.getFullYear().toString();
const todayMonth = todayDate.getMonth().toString();
const todayDay = todayDate.getDay().toString();
let todayMonthString = todayMonth.padStart(2, "0");
let todayDayString = todayDay.padStart(2, "0");

const calendarValueString = `${todayYear}-${todayMonthString}-${todayDayString}`;
calendarValue.value = calendarValueString;
