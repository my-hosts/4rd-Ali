// === DOM ELEMENT ===

// === SELECT ELEMENTS ===
const gifEl = document.getElementById("mouse-gif");

// === COUNTERS ===
const counters = {
  hunger: 50,
  energy: 50,
  mood: 50,
  seberazvitie: 50,
};

// === TIMERS ===
const timers = {
  hunger: null,
  energy: null,
  mood: null,
  seberazvitie: null,
};

// === CHANGE GIF FUNCTION ===
// === GLOBAL VARIABLE to track active timeouts ===
let gifTimeouts = [];
/**
 * Safely increase or decrease a counter within min/max bounds
 * @param {string} key - The counter property, e.g., "hunger"
 * @param {number} delta - Positive to increase, negative to decrease
 * @param {number} min - Minimum allowed value (default 0)
 * @param {number} max - Maximum allowed value (default 100)
 */
function changeCounter(key, delta, min = 0, max = 100) {
  counters[key] = Math.min(max, Math.max(min, counters[key] + delta));
}

// === CHANGE GIF FUNCTION ===
function changeGif(state) {
  // 🧹 1. Clear any old timeouts before changing GIF
  gifTimeouts.forEach(timeout => clearTimeout(timeout));
  gifTimeouts = [];

  // 🖼️ 2. Change GIF based on action
  switch (state) {
    case "eat":
      gifEl.src = "eat_mouse.gif";
      gifTimeouts.push(setTimeout(() => gifEl.src = "bigger_default.gif", 4000));
      break;

    case "sleep":
      
      playGif("sleeping_mouse.gif");
      gifTimeouts.push(setTimeout(() => gifEl.src = "sleeping_mouse.jpg", 6000));
      gifTimeouts.push(setTimeout(() => gifEl.src = "bigger_default.gif", 12000));
      break;

    case "work":
      gifEl.src = "rat-work.gif";
      gifTimeouts.push(setTimeout(() => gifEl.src = "bigger_default.gif", 3000));
      break;

    case "slay":
      gifEl.src = "slay_mouse.gif";
      gifTimeouts.push(setTimeout(() => gifEl.src = "bigger_default.gif", 3000));
      break;

    default:
      gifEl.src = "bigger_default.gif";
  }
}

function playGif(src) {
  gifEl.src = `${src}?v=${Date.now()}`;
}

// === ACTION FUNCTIONS ===
function eat() {
  changeCounter("hunger", 30);      // +30 Hunger
  changeCounter("energy", 10);      // +10 Energy
  changeCounter("mood", 5);         // +5 Mood
  changeGif("eat");
  updateBars();
}

function sleep() {
  changeCounter("hunger", -10);     // -10 Hunger
  changeCounter("energy", 30);      // +30 Energy
  changeGif("sleep");
  updateBars();
}

function work() {
  changeCounter("hunger", -10);     // -10 Hunger
  changeCounter("energy", -20);     // -20 Energy
  changeCounter("seberazvitie", 30); // +30 Self-development
  changeCounter("mood", -5);        // -5 Mood
  changeGif("work");
  updateBars();
}

function slay() {
  changeCounter("mood", 30);        // +30 Mood
  changeCounter("seberazvitie", 20); // +20 Self-development
  changeGif("slay");
  updateBars();
}


// === UPDATE PROGRESS BARS ===
function updateBars() {
  document.getElementById("fillBarHunger").style.width = counters.hunger + "%";
  document.getElementById("fillBarEnergy").style.width = counters.energy + "%";
  document.getElementById("fillBarMood").style.width = counters.mood + "%";
  document.getElementById("fillBarSeberazvitie").style.width = counters.seberazvitie + "%";
}

// === DECREASE EACH BAR INDEPENDENTLY ===
function startDecreasingBars() {
  const startTimer = (key, interval) => {
    if (timers[key]) return; // avoid duplicate timers

    timers[key] = setInterval(() => {
      if (counters[key] > 0) {
        counters[key] -= 5;
        if (counters[key] < 0) counters[key] = 0;
        updateBars();
      }
    }, interval);
  };

  // Each bar decreases at its own pace (you can adjust speeds)
  startTimer("hunger", 1000);
  startTimer("energy", 1000);
  startTimer("mood", 1000);
  startTimer("seberazvitie", 1000);
}

// === START EVERYTHING ===
updateBars();
startDecreasingBars();



function krilataFrazaPopUp(){
  //popup krilata fraza
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  console.log("Popup function triggered");
}

window.krilataFrazaPopUp = krilataFrazaPopUp;