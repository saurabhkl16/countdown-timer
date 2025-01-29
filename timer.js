const endDate = "31 dec 2025 23:59:59"; // Correct format
let inputs = document.querySelectorAll("input");

const setCountDown = () => {
  let end = new Date(endDate);
  let today = new Date();
  let diff = (end - today) / 1000; // Difference in seconds

  if (diff <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  let seconds = Math.floor(diff % 60);
  let minutes = Math.floor((diff / 60) % 60);
  let hours = Math.floor((diff / 3600) % 24);
  let days = Math.floor((diff / 86400) % 30);
  let months = Math.floor(diff / (86400 * 30));

  // Update current time display
  let currentTime = document.getElementById("currentTime");
  if (currentTime) {
    currentTime.innerHTML = today;
  }

  // Ensure inputs exist before updating
  if (inputs.length >= 5) {
    inputs[0].value = months;
    inputs[1].value = days;
    inputs[2].value = hours;
    inputs[3].value = minutes;
    inputs[4].value = seconds;
  }
};

// Run immediately and then update every second
setCountDown();
let countdownInterval = setInterval(setCountDown, 1000);
