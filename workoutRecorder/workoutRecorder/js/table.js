const tableHeader = document.querySelector("#table-header");
const tableButton = document.querySelector("#table-button");
const tableHeaderString = `Workout of ${calendarValueString}`;
tableHeader.innerText = tableHeaderString;

function handleTableButtonClicked(event) {
  document.createElement("td");
  console.log(event);
}
tableButton.addEventListener("click", handleTableButtonClicked);
