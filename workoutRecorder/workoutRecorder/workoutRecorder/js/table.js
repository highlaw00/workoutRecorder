const tableHeader = document.querySelector("#table-header");
const tableButton = document.querySelector("#table-button");
const tableHeaderString = `Workout of ${calendarValueString}`;
tableHeader.innerText = tableHeaderString;

function handleTableButtonClicked(event) {
  const newWorkoutElement = document.createElement("tr");
  const workoutName = document.createElement("td");
  workoutName.innerText = "Test Name";
  const workoutSet = document.createElement("td");
  workoutSet.innerText = "Test Set";
  const workoutWeight = document.createElement("td");
  workoutWeight.innerText = "Test Weight";
  const workoutReps = document.createElement("td");
  workoutReps.innerText = "Test Reps";
  const targetElement = event.target.parentNode.querySelector("tbody");

  newWorkoutElement.appendChild(workoutName);
  newWorkoutElement.appendChild(workoutSet);
  newWorkoutElement.appendChild(workoutWeight);
  newWorkoutElement.appendChild(workoutReps);
  targetElement.appendChild(newWorkoutElement);
  console.log(targetElement);
}

tableButton.addEventListener("click", handleTableButtonClicked);
