// MODEL (handles Data and Logic / saves, deletes and manages data)
//*******************************************************************************************************************************************
let points = 0;
let combo = 0;
let damage = 0;
let buttonClicks = 0;
let countDown;
let timeout;
let damageInt;
let clickButton;
let buttonHeight;
let buttonWidth;
let text;
let buttonText;
let pointsUpdate;
let randomTopValue;
let randomLeftValue;
let randomTopValueInt;
let randomLeftValueInt;
let verticalCenter;
let horizontalCenter;
let lastVerticalCenter;
let lastHorizontalCenter;
let boxVectorLength;
let clickVectorLength;
let missString;
let vectorString;
let xBoxVector;
let yBoxVector;
let xClickVector;
let yClickVector;
let sumVectorDifference;
let accuracy;
let accuracyPercent;
let x = 0;
let y = 0;
let lastX = 0;
let lastY = 0;
let missX = 0;
let missY = 0;
let sumX = 0;
let sumY = 0;
let comboCounter = document.getElementById("combo");
let playMusic = true;
let playSfx = true;
let gameRendered = false;
let gameStarted = false;
let gameIsOver = false;
let buttonCheck = false;
let renderedStatScreenOnce = false;
let lastClickHit = false;
let Sagan = ("The cosmos is all that is or ever was or ever will be. Our contemplations of the cosmos stir us. There is a tingling in the spine, a catch in the voice, a faint sensation: as if a distant memory of falling from a great height. We know we are approaching the grandest of mysteries. The size and age of the cosmos are beyond ordinary human understanding. Lost somewhere between immensity and eternity is our tiny planetary home, the Earth. For the first time, we have the power to decide the fate of our planet and ourselves. This is a time of great danger, but our species is young and curious and brave. It shows much promise. In the last few millennia we've made the most astonishing and unexpected discoveries about the cosmos and our place within it. I believe our future depends powerfully on how well we understand this cosmos in which we float like a mote of dust in the morning sky. We're about to begin a journey through the cosmos. We'll encounter galaxies, and suns, and planets, life and consciousness coming into being, evolving and perishing. Worlds of ice and stars of diamond. Atoms as massive as suns and universes smaller than atoms. But it's also a story of our own planet, and the plants and animals that share it with us. And it's a story about us: how we achieved our present understanding of the cosmos, how the cosmos has shaped our evolution and our culture, and what our fate may be.");
let Rick = ("We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but you're too shy to say it (say it) Inside, we both know what's been going on (going on) We know the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you");
let Hammer = ("You can't touch this You can't touch this You can't touch this You can't touch this My, my, my, my Music hits me so hard Makes me say Oh, my Lord Thank you for blessing me With a mind to rhyme and two hyped feet It feels good when you know you're down A super dope homeboy from the Oaktown And I'm known as such And this is a beat, uh, you can't touch I told you, homeboy You can't touch this Yeah, that's how we livin', and ya know You can't touch this Look in my eyes, man You can't touch this Yo, let me bust the funky Iyrics You can't touch this Fresh new kicks and pants You got it like that Now you know you wanna dance So, move outta your seat And get a fly girl And catch this beat While it's rolling Hold on Pump a little bit and let 'em know it's going on Like that, like that Cold on a mission, so fall on back Let 'em know that you're too much And this is a beat, uh, they can't touch");
let Ads = ("X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X");

function saveElements() {
  clickButton = document.getElementById("click-me");
  removeElements();
};

function childData() {
  buttonHeight = 200;
  buttonWidth = 350;
  clickButton.style.width = buttonWidth + 'px';
  clickButton.style.height = buttonHeight + 'px';
  text = Sagan;
  buttonText = Sagan.split(' ');
};

function casualData() {
  buttonHeight = 150;
  buttonWidth = 250;
  clickButton.style.width = buttonWidth + 'px';
  clickButton.style.height = buttonHeight + 'px';
  text = Rick;
  buttonText = Rick.split(' ');
};

function hardcoreData() {
  buttonHeight = 100;
  buttonWidth = 125;
  clickButton.style.width = buttonWidth + 'px';
  clickButton.style.height = buttonHeight + 'px';
  text = Hammer;
  buttonText = Hammer.split(' ');
};

function pupData() {
  buttonHeight = 40;
  buttonWidth = 40;
  clickButton.style.width = buttonWidth + 'px';
  clickButton.style.height = buttonHeight + 'px';
  text = Ads;
  buttonText = Ads.split(' ');
};

function startGame() {
  gameStarted = true;
};

function muteSound() {
  if (playMusic) {
    document.getElementById("sound-icon").src = "mute-sound.svg";
    playMusic = false;
  }
  else if (!playMusic) {
    document.getElementById("sound-icon").src = "sound.svg";
    playMusic = true;
  };
};

function muteSfx() {
  if (playSfx) {
    document.getElementById("sfx-icon").src = "mute-sound.svg";
    playSfx = false;
  }
  else if (!playSfx) {
    document.getElementById("sfx-icon").src = "sound.svg";
    playSfx = true;
  };
};

function checkButton() {
  buttonCheck = true;
  // prevents parents from also registering the click of the child
  event.stopPropagation();
  checkClick();
};

function checkScreen() {
  buttonCheck = false;
  checkClick();
};

function checkGameRender() {
  if (gameRendered == false) {
    gameRendered = true;
  };
};

function generateButton() {
  randomLeftValue = Math.floor(Math.random() * (1565 - clickButton.style.width[0])) + 'px';
  randomTopValue = Math.floor(Math.random() * (595 - clickButton.style.height[0])) + 150 + 'px';
  clickButton.style.left = randomLeftValue;
  clickButton.style.top = randomTopValue;
  clickButton.innerHTML = buttonText[buttonClicks];
};


function setGameTime() {
  // set game time in ms
  countDown = new Date().getTime() + 31000;
};

function checkPlayMusic() {
  if (playMusic) {
    gameSound = new Audio('DS3-Firelink.opus');
    gameSound.play();
    playMusic = false;
  };
};

function checkPlayScoreSfx() {
  if (playSfx) {
    scoreSound = new Audio('Score.wav');
    scoreSound.play();
  };
};

function checkPlayHitSfx() {
  if (playSfx) {
    hitSound = new Audio('Breath.opus');
    hitSound.play();
  }
}

function timerSetup() {

  // Update the count down every second (1000 at the bottom)
  let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the difference between now and the count down time
    let remainder = countDown - now;

    // Time calculations in seconds
    let seconds = Math.floor((remainder % (1000 * 60)) / 1000);

    // Display the time in the element with id="counter"
    if (gameIsOver == false) {
      document.getElementById("counter").innerHTML = seconds + "s ";
    };

    // Check if the timer runs out and remove everything but score one time runs out
    if (remainder < 0) {
      // clearInterval(x);

      gameOver();

    };
  }, 200);
};

function checkIfGameOver() {

  let x = setInterval(function () {
    if (gameIsOver) {
      if (!renderedStatScreenOnce) {
        clearGameScreen();
        resultMisses();
        resultAccuracy();
        renderStatScreen();
      };
    };
  }, 200);
};

function renderStatScreen() {

  document.getElementById("scoreStat").style.zIndex = 25;
  document.getElementById("scoreStat").innerHTML = 'Score: ' + points;

  document.getElementById("accuracyStat").style.zIndex = 25;
  document.getElementById("accuracyStat").innerHTML = accuracyPercent;

  document.getElementById("missStat").style.zIndex = 25;
  document.getElementById("missStat").innerHTML = missString;

  document.getElementById("vectorDifferenceStat").style.zIndex = 25;
  document.getElementById("vectorDifferenceStat").innerHTML = vectorString;

  document.getElementById("statHeader").style.zIndex = 25;
  statHeader.innerHTML = "Game stats";
};


function updateCountersAndPoints() {
  // Increase points, combo and buttonClicks by 1
  points++;
  combo++;
  buttonClicks++;

  if (combo < 5) { }

  else {
    points = points + Math.floor(combo / 5);
  };
};

function updateCombo() {
  if (combo < 5) {
    comboString = '';
  }

  else {
    comboString = 'Combo x ' + Math.floor(combo / 5);
  };
};

function getPointsElement() {
  // Import element points from html
  pointsUpdate = document.getElementById("points");
};

function calculateExtraTime() {
  // Change to int for math and reduce time regained by 0.98^buttonClicks
  let buttonClicksInt = parseInt(buttonClicks, 10);
  extraTime = 1000 * Math.pow(0.985, buttonClicksInt);
  countDown = countDown + extraTime;
};

function resetComboIncreaseDamage() {
  combo = combo / 2;
  damage++;
};

function takeDamageLoseTime() {
  // Change to int for math and increase dmg linearly by 100ms for each time damage has been taken
  damageInt = parseInt(damage, 10);
  losetime = 100 * damageInt;
  countDown = countDown - losetime;
};

function getGameDiv() {
  gameDiv = document.getElementById("game-container")
};

function gameOver() {
  gameIsOver = true;
  playSfx = false;
  playMusic = false;
};

function saveCursorPosition() {
  x = event.screenX;
  y = event.screenY;
};

function calculateMisses() {
  // Calculate center of button
  randomTopValueInt = parseInt(randomTopValue.slice(0, -2), 10);
  randomLeftValueInt = parseInt(randomLeftValue.slice(0, -2), 10);

  // save the previous box center to calculate distance between old box and current click, as well as the distance between old box and new box
  lastVerticalCenter = verticalCenter;
  lastHorizontalCenter = horizontalCenter;

  // save the previous click to calculate distance between last click and current click, as well as the distance between old box and new box
  lastX = x;
  lastY = y;

  // since the box placement is defined by top and left we need to move 1/2 a box down and to the right to find the center of the box
  verticalCenter = randomTopValueInt - buttonHeight / 2;
  horizontalCenter = randomLeftValueInt + buttonWidth / 2;

  // Calculates by how much the box was missed
  missX = x - horizontalCenter;
  missY = y - verticalCenter;

  // saves all miss data to figure out where most of the misses occurred
  sumX = sumX + missX;
  sumY = sumY + missY;

  if (lastClickHit) {
    // calculate x & y distance from last click to new box center
    xBoxVector = horizontalCenter - lastX;
    yBoxVector = verticalCenter - lastY;

    // calculate x & y distance from last click to current click position
    xClickVector = x - lastX;
    yClickVector = y - lastY;

    // calculate the distance of the hypothenuse e.g. the length of the actual vector between the last click and current box
    boxVectorLength = Math.pow((1 / 2), (Math.pow(2, xBoxVector) + Math.pow(2, yBoxVector)));

    // calculate the distance of the hypothenuse e.g. the length of the actual vector between the old box and click position
    clickVectorLength = Math.pow((1 / 2), (Math.pow(2, xClickVector) + Math.pow(2, yClickVector)));

    // save the sum of all vector difference data to see if player is undershooting or overshooting distance from previous box. 
    // Positive = overshoot || Negative = undershoot
    sumVectorDifference = sumVectorDifference + clickVectorLength - boxVectorLength;
  };
};

function resultMisses() {
  // Checking if the absolute value of the sum of all horizontal misses are larger than the same value for vertical misses
  if (Math.abs(sumX) > Math.abs(sumY)) {
    if (sumX > 0)
      missString = ('You tend to miss on the right side of the button')
    else {
      missString = ('You tend to miss on the left side of the button')
    };
  };

  // Same check as above but inverted
  if (Math.abs(sumX) < Math.abs(sumY)) {
    if (sumY > 0)
      missString = ('You tend to miss above the button')
    else {
      missString = ('You tend to miss below the button')
    };
  };

  if (sumVectorDifference < 0) {
    vectorString = ('You tend to undershoot your target');
  }
  else {
    vectorString = ('You tend to overshoot your target')
  };

};

function resultAccuracy() {
  accuracy = parseInt(buttonClicks, 10) / (parseInt(buttonClicks, 10) + damageInt);
  accuracyPercent = 'Accuracy: ' + Math.floor((accuracy * 100)) + ' Percent';
};

function stateOfLastClickHit() {
  lastClickHit = true;
};

function stateOfLastClickMiss() {
  lastClickHit = false;
};

// VIEW (handles rendering and styling objects)
//*******************************************************************************************************************************************

// Delete the menu after difficulty has been selected
function deleteMenuItems() {
  document.getElementById("Child").remove();
  document.getElementById("Casual").remove();
  document.getElementById("Hardcore").remove();
  document.getElementById("Pop-up").remove();
  document.getElementById("menu-text").remove();
  document.getElementById("author").remove();
  document.getElementById("mute-soundtrack").remove();
  document.getElementById("mute-sound-effects").remove();
  document.getElementById("menu-container").remove();
};

// Clear the screen once time has run out
function clearGameScreen() {
  if (!renderedStatScreenOnce) {
    document.getElementById("counter").remove();
    document.getElementById("click-me").remove();
    document.getElementById("combo").remove();
    document.getElementById("points").remove();
  };
};


function createButton() {
  document.createElement.clickButton;
};

function placeButton() {
  document.body.appendChild(clickButton);
};

function renderComboAndPoints(pointsUpdate) {
  comboCounter.innerHTML = comboString;
  // Update value of the imported element
  pointsUpdate.innerHTML = points;
};

// Screen effect that makes the screen flash red when you miss the button
function turnScreenRed() {
  if (!gameIsOver) {
    gameDiv.style.backgroundColor = "rgba(100, 30, 30, 0.2)";
    // after 40ms run screenflash function
    setTimeout(screenflash, 40);
    // Reset to standard background color
    function screenflash() {
      gameDiv.style.backgroundColor = "rgb(92, 118, 98)";
    };
  };
};

function removeElements() {
  document.getElementById("click-me").remove();
};


// CONTROLLER (handles requests from the user and sends requests actions from MODEL and VIEW / responds to click events)
//*******************************************************************************************************************************************

// Saves the html button and deletes the button in preparation for the player selecting difficulty
saveElements();

// Set target size depending on difficulty and remove the game menu
function childDiff() {
  childData();
  removeMenu();
}

function casualDiff() {
  casualData();
  removeMenu();
}

function hardcoreDiff() {
  hardcoreData();
  removeMenu();
}

function pupDiff() {
  pupData();
  removeMenu();
}

// Makes it so selecting the difficulty does not trigger in-game functions via bubbling/propagation
function menuStopProp() {
  event.stopPropagation();
}

// remove menu items and start the game
function removeMenu() {
  deleteMenuItems();
  startGame();
}

// This function will call itself every 100ms until a difficulty has been selected. Not pretty but it works.
function renderGame() {
  if (!gameStarted) {
    setTimeout(renderGame, 100);
  }
  else {
    // Check if the game has rendered, make & place first button, set remaining time and check if background music should be played
    checkGameRender();
    createButton();
    generateButton();
    placeButton();
    setGameTime();
    checkPlayMusic();
  };
};

// Call the function directly above
renderGame();

// Check if a click is a hit or a miss
function checkClick() {
  if (gameRendered) {

    // Sets up the game timer and checks if the time has run out
    timerSetup();


    if (buttonCheck) {
      stateOfLastClickHit();
      // Check if Sfx should be played
      checkPlayScoreSfx();

      updateCountersAndPoints();
      updateCombo();


      createButton();
      generateButton();
      placeButton();


      getPointsElement();
      renderComboAndPoints(pointsUpdate);

      calculateExtraTime();
    }
    else if (!buttonCheck) {
      stateOfLastClickMiss();
      saveCursorPosition();
      calculateMisses();

      resetComboIncreaseDamage();
      updateCombo();
      getPointsElement();
      renderComboAndPoints(pointsUpdate);

      checkPlayHitSfx();

      takeDamageLoseTime();
      // Change background color to red
      getGameDiv();
      turnScreenRed();
    }
  }
}

// Checks if the game has ended and displays the stats screen
checkIfGameOver();


// CODE ARCHIVE
//*************************************************************************************************************************************** */
/* Tried making the stats screen using Javascript (Model)
function createStatScreenElements() {
  // Define high score for stats screen
  let scoreStat = document.body.createElement("p");
  let scoreValue = document.createTextNode(points);
  scoreStat.setAttribute("class", "scoreStat");
  scoreStat.setAttribute("id", "scoreStat");

  // Define accuracy for the stats screen
  let accuracyStat = document.body.createElement("p");
  let accuracyValue = document.createTextNode(accuracy);
  accuracyStat.setAttribute("class", "accuracyStat");
  accuracyStat.setAttribute("id", "accuracyStat");

  // Define where misses occur for the stats screen *** INSERT TEXT STRING ***
  let missStat = document.body.createElement("p");
  let missValue = document.createTextNode(missString);
  missStat.setAttribute("class", "missStat");
  missStat.setAttribute("id", "missStat");

  // Define if current click is overshooting or undershooting the box based on last click position
  let vectorDifferenceStat = document.body.createElement("p");
  let vectorDifferenceValue = document.createTextNode(vectorString);
  vectorDifferenceStat.setAttribute("class", "vectorDifferenceStat");
  vectorDifferenceStat.setAttribute("id", "vectorDifferenceStat");
};
*/

/* Tried making stats screen using Javascript (View)
function renderStatScreen(scoreStat, scoreValue, accuracyStat, accuracyValue, missStat, missValue, vectorDifferenceStat, vectorDifferenceValue) {
  // Render elements for the stat screen
  scoreStat.appendChild(scoreValue);
  document.body.appendChild.scoreStat;

  accuracyStat.appendChild(accuracyValue);
  document.body.appendChild.accuracyStat;

  missStat.appendChild(missValue);
  document.body.appendChild.missStat;

  vectorDifferenceStat.appendChild(vectorDifferenceValue);
  document.body.appendChild(vectorDifferenceStat);
};
*/