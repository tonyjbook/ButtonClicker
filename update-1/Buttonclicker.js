// Counter || Set the remaining time in ms + current time

let countDown;
let points = 0;
let combo = 0;
let damage = 0;
let buttonClicks = 0;
let timeout;
let playMusic;
let clickButton;
let text;
let buttonText;
let comboCounter = document.getElementById("combo");
let gameRendered = false;
let gameStarted = false;
let buttonCheck = false;
let Sagan = ("The cosmos is all that is or ever was or ever will be. Our contemplations of the cosmos stir us. There is a tingling in the spine, a catch in the voice, a faint sensation: as if a distant memory of falling from a great height. We know we are approaching the grandest of mysteries. The size and age of the cosmos are beyond ordinary human understanding. Lost somewhere between immensity and eternity is our tiny planetary home, the Earth. For the first time, we have the power to decide the fate of our planet and ourselves. This is a time of great danger, but our species is young and curious and brave. It shows much promise. In the last few millennia we've made the most astonishing and unexpected discoveries about the cosmos and our place within it. I believe our future depends powerfully on how well we understand this cosmos in which we float like a mote of dust in the morning sky. We're about to begin a journey through the cosmos. We'll encounter galaxies, and suns, and planets, life and consciousness coming into being, evolving and perishing. Worlds of ice and stars of diamond. Atoms as massive as suns and universes smaller than atoms. But it's also a story of our own planet, and the plants and animals that share it with us. And it's a story about us: how we achieved our present understanding of the cosmos, how the cosmos has shaped our evolution and our culture, and what our fate may be.");
let Rick = ("We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but you're too shy to say it (say it) Inside, we both know what's been going on (going on) We know the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you");
let Hammer = ("You can't touch this You can't touch this You can't touch this You can't touch this My, my, my, my Music hits me so hard Makes me say Oh, my Lord Thank you for blessing me With a mind to rhyme and two hyped feet It feels good when you know you're down A super dope homeboy from the Oaktown And I'm known as such And this is a beat, uh, you can't touch I told you, homeboy You can't touch this Yeah, that's how we livin', and ya know You can't touch this Look in my eyes, man You can't touch this Yo, let me bust the funky Iyrics You can't touch this Fresh new kicks and pants You got it like that Now you know you wanna dance So, move outta your seat And get a fly girl And catch this beat While it's rolling Hold on Pump a little bit and let 'em know it's going on Like that, like that Cold on a mission, so fall on back Let 'em know that you're too much And this is a beat, uh, they can't touch"); 
let Ads = ("X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X");
// save HTML properties of button since I can't create the onclick in JS
clickButton = document.getElementById("click-me");
document.getElementById("click-me").remove();

// Set target size depending on difficulty and set the remaining time for the round
// could be condensed into one function
function childDiff() {
  clickButton.style.width = 350 + 'px';
  clickButton.style.height = 200 + 'px';
  text = Sagan;
  buttonText = Sagan.split(' ');
  removeMenu();
}

function casualDiff() {
  clickButton.style.width = 250 + 'px';
  clickButton.style.height = 150 + 'px';
  text = Rick;
  buttonText = Rick.split(' ');
  removeMenu();
}

function hardcoreDiff() {
  clickButton.style.width = 125 + 'px';
  clickButton.style.height = 100 + 'px';
  text = Hammer;
  buttonText = Hammer.split(' ');
  removeMenu();
}

function pupDiff() {
  clickButton.style.width = 40 + 'px';
  clickButton.style.height = 40 + 'px';
  text = Ads;
  buttonText = Ads.split(' ');
  removeMenu();
}

function menuStopProp() {
  event.stopPropagation();
}

// remove menu items once the game has started
function removeMenu() {
  document.getElementById("Child").remove();
  document.getElementById("Casual").remove();
  document.getElementById("Hardcore").remove();
  document.getElementById("Pop-up").remove();
  document.getElementById("menu-text").remove();
  document.getElementById("author").remove();
  document.getElementById("menu-container").remove();
  gameStarted = true;
}

// This function will call itself every 100ms until a difficulty has been selected. Not pretty but it works.

function renderGame() {
  if (!gameStarted) {
    setTimeout(renderGame, 100);
  }
  else {

    // Render the first button in a random location since new buttons are rendered when the previous button is clicked
    if (gameRendered == false) {
      gameRendered = true;
      playMusic = true;
      document.createElement.clickButton;
      const randomLeftValue = Math.floor(Math.random() * (1565 - clickButton.style.width)) + 'px';
      const randomTopValue = Math.floor(Math.random() * (595 - clickButton.style.height)) + 150 + 'px';
      clickButton.style.left = randomLeftValue;
      clickButton.style.top = randomTopValue;
      clickButton.innerHTML = buttonText[0];
      document.body.appendChild(clickButton);
      // set game time in ms
      countDown = new Date().getTime() + 31000;
      event.stopPropagation();
    };
  };
};

renderGame();

function checkButton() {
  buttonCheck = true;
  // prevents parents from also registering the click of the child
  event.stopPropagation();
  checkClick();
}

function checkScreen() {
  buttonCheck = false;
  checkClick();
}

function muteSound() {
  playMusic = false;
  changeSoundIcon = document.getElementById("sound-icon").src=('mute-sound.svg');
}

function checkClick() {
  if (gameRendered) {
    if (playMusic) {
      gameSound = new Audio('Ambience.opus');
      gameSound.play();
      playMusic = false;
    }

    // Update the count down every second (1000 at the bottom)
    let x = setInterval(function () {

      // Get today's date and time
      let now = new Date().getTime();

      // Find the difference between now and the count down time
      let remainder = countDown - now;

      // Time calculations in seconds
      let seconds = Math.floor((remainder % (1000 * 60)) / 1000);

      // Display the time in the element with id="counter"
      document.getElementById("counter").innerHTML = seconds + "s ";

      // Check if the timer runs out and remove everything but score one time runs out
      if (remainder < 0) {
        clearInterval(x);
        document.getElementById("counter").remove();
        document.getElementById("click-me").remove();
        document.getElementById("combo").remove();

        // send player to highscore section (maybe offscreen?)
      };
    }, 100);

    if (buttonCheck) {

      scoreSound = new Audio('Score.wav');
      scoreSound.play();

      // create a new button with a random location
      document.createElement.clickButton;
      const randomLeftValue = Math.floor(Math.random() * (1550)) + 'px';
      const randomTopValue = Math.floor(Math.random() * (575)) + 150 + 'px';
      clickButton.style.left = randomLeftValue;
      clickButton.style.top = randomTopValue;
      document.body.appendChild(clickButton);
      clickButton.innerHTML = buttonText[buttonClicks + 1];

      // Increase points and combo by 1
      points++;
      combo++;
      buttonClicks++;

      if (combo < 5) {
        comboString = '';
      }

      else {
        comboString = 'Combo x ' + Math.floor(combo / 5);
        points = points + Math.floor(combo / 5);
      }

      comboCounter.innerHTML = comboString;
      // Import element points from html
      let pointsUpdate = document.getElementById("points");

      // Update value of the imported element
      pointsUpdate.innerHTML = points;

      // Change to int for math and reduce time regained by 0.98^buttonClicks
      let buttonClicksInt = parseInt(buttonClicks, 10);
      extraTime = 1000 * Math.pow(0.98, buttonClicksInt);
      countDown = countDown + extraTime;

    }
    else if (!buttonCheck) {
      // reset combo counter
      comboCounter.innerHTML = '';
      combo = 0;
      hitSound = new Audio('Breath.opus');
      hitSound.play();
      damage++;

      // Change to int for math and increase dmg linearly by 100ms for each time damage has been taken
      let damageInt = parseInt(damage, 10);
      losetime = 100 * damageInt;
      countDown = countDown - losetime;
      // Change background color to red
      gameDiv = document.getElementById("game-container")
      gameDiv.style.backgroundColor = "rgba(100, 30, 30, 0.2)";
      // after 40ms run screenflash function
      setTimeout(screenflash, 40);
    }
    // Reset to standard background color
    function screenflash() {
      gameDiv.style.backgroundColor = "rgba(43, 57, 46, 0.474)";
    }
  }
}

