// Counter || Set the remaining time in ms + current time
let countDown = new Date().getTime() + 31000;
let points = 0;
let combo = 0;
let damage = 0;
let buttonCheck = false;
let screenCheck = false;
let timeout;
let clickButton;
let comboNumber1 = 2;
let comboNumber2 = 3;
let comboNumber3 = 4;
let comboNumber4 = 5;
let comboCounter = document.getElementById("combo");



// Update the count down every second (1000 at the bottom)
let x = setInterval(function () {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the difference between now and the count down time
  let distance = countDown - now;

  // Time calculations in seconds
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the time in the element with id="counter"
  document.getElementById("counter").innerHTML = seconds + "s ";

  // Check if the timer runs out
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("click-me").remove();
    document.getElementById("counter").innerHTML = "Time's up!";
    cancelfuturecode;
  }
}, 100);

function checkButton() {
  buttonCheck = true;
  screenCheck = false;
  // prevents parents from also registering the click of the child
  event.stopPropagation();
  checkClick();
}

function checkScreen() {
  buttonCheck = false;
  screenCheck = true;
  checkClick();
}


function checkClick() {

  if (buttonCheck === true) {

    scoreSound = new Audio('Score.wav');
    scoreSound.play();

    clickButton = document.getElementById("click-me");

    document.getElementById("click-me").remove();

    document.createElement.clickButton;
    const randomLeftValue = Math.floor(Math.random() * (1700)) + 'px';
    const randomTopValue = Math.floor(Math.random() * (670)) + 200 + 'px';
    clickButton.style.left = randomLeftValue;
    clickButton.style.top = randomTopValue;
    document.body.appendChild(clickButton);
    buttonCheck = false;
    screenCheck = false;

    // Increase points and combo by 1
    points++;
    combo++;

    if (combo <= 5) {

      
      comboCounter.innerHTML = '';

      // Import element points from html
      let pointsUpdate = document.getElementById("points");

      // Update value of the imported element
      pointsUpdate.innerHTML = points;

      let pointsInt = parseInt(points, 10);
      extraTime = 1000 * Math.pow(0.98, pointsInt);
      countDown = countDown + extraTime;
    }
    else if (combo > 5 && combo <= 10) {
       
      
      comboCounter.innerHTML = 'Combo x ' + comboNumber1;

      points++;
      // Import element points from html
      let pointsUpdate = document.getElementById("points");

      // Update value of the imported element
      pointsUpdate.innerHTML = points;

      let pointsInt = parseInt(points, 10);
      extraTime = 1000 * Math.pow(0.98, pointsInt);
      countDown = countDown + extraTime;
    }
    else if (combo > 10 && combo <= 15) {

      comboCounter.innerHTML = 'Combo x ' + comboNumber2;

      points++;
      points++;
      // Import element points from html
      let pointsUpdate = document.getElementById("points");

      // Update value of the imported element
      pointsUpdate.innerHTML = points;

      let pointsInt = parseInt(points, 10);
      extraTime = 1000 * Math.pow(0.98, pointsInt);
      countDown = countDown + extraTime;
    }

    else if (combo > 15 && combo <= 20) {

      comboCounter.innerHTML = 'Combo x ' + comboNumber3;

      points++;
      points++;
      points++;
      // Import element points from html
      let pointsUpdate = document.getElementById("points");

      // Update value of the imported element
      pointsUpdate.innerHTML = points;

      let pointsInt = parseInt(points, 10);
      extraTime = 1000 * Math.pow(0.98, pointsInt);
      countDown = countDown + extraTime;
    }

    else if (combo > 20) {

      comboCounter.innerHTML = 'Combo x ' + comboNumber4;

      points++;
      points++;
      points++;
      points++;
      // Import element points from html
      let pointsUpdate = document.getElementById("points");

      // Update value of the imported element
      pointsUpdate.innerHTML = points;

      let pointsInt = parseInt(points, 10);
      extraTime = 1000 * Math.pow(0.98, pointsInt);
      countDown = countDown + extraTime;
    }
  }
  else if (screenCheck === true && buttonCheck === false) {
    comboCounter.innerHTML = '';
    hitSound = new Audio('Breath.wav');
    hitSound.play();
    damage++;
    combo = 0;
    let damageInt = parseInt(damage, 10);
    losetime = 100 * damageInt;
    countDown = countDown - losetime;
    buttonCheck = false;
    screenCheck = false;
    gameDiv = document.getElementById("game-container")
    gameDiv.style.backgroundColor = "rgba(100, 30, 30, 0.2)";
    setTimeout(screenflash, 40);
  }
  function screenflash() {
    gameDiv.style.backgroundColor = "rgb(126, 182, 136)";
  }
}