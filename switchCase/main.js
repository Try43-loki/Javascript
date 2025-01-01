function displayDay() {
  const day = parseInt(document.getElementById("day").value);
  const display = document.getElementById("display");

  switch (day) {
    case 1:
      display.textContent = "Monday";
      break;
    case 2:
      display.textContent = "Tuesday";
      break;
    case 3:
      display.textContent = "Wednesday";
      break;
    case 4:
      display.textContent = "Thursday";
      break;
    case 5:
      display.textContent = "Friday";
      break;
    case 6:
      display.textContent = "Saturday";
      break;
    case 7:
      display.textContent = "Sunday";
      break;
    default:
      display.textContent =
        "Unknown day. Please enter a number between 1 and 7.";
  }
}
