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
      playGif("eat_mouse.gif");
      gifTimeouts.push(setTimeout(() => gifEl.src = "bigger_default.gif", 4000));
      break;

    case "sleep":
      
      playGif("sleeping_mouse.gif");
      gifTimeouts.push(setTimeout(() => gifEl.src = "sleeping_mouse.jpg", 6000));
      gifTimeouts.push(setTimeout(() => gifEl.src = "bigger_default.gif", 12000));
      break;

    case "work":
      playGif("work_mouse.gif");
      gifTimeouts.push(setTimeout(() => gifEl.src = "bigger_default.gif", 8000));
      break;

    case "slay":
      playGif("slay_mouse.gif");
      gifTimeouts.push(setTimeout(() => gifEl.src = "bigger_default.gif", 8000));
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
        counters[key] -= 1;
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
  const text = ["Докато е жив, човек не трябва да умира!",
    "Човек само когато си знае какво му е, само аз си знам какво ми е.",
    "Човек като има рожден ден, само той си има рожден ден!",
    "Или ще си посегна на живота, или ще сложа край на живота си.",
    "Който нож вади, ще го използва..",
    "Жените са като виното... с възрастта остаряват!", 
    "Nothing beats a Jet2Holiday and right now you can save 50 pounds per person! That's two hundred pounds off for a family of four!", 
    "По-добре Милка с лешници, отколкото лелка с мишници."]

  console.log("Popup function triggered");
  let data = text[Math.floor(Math.random() * text.length)]; // random element
  popup.setAttribute("data-content", data); // ✅ sets the content dynamically
  popup.classList.toggle("show");
  /*var div = document.getElementById('myPopup');
  div.setAttribute(data)*/

}

window.krilataFrazaPopUp = krilataFrazaPopUp;

function play_audio(){
  const audio = document.getElementById("bg-audio");
  audio.loop = true;
  document.addEventListener('DOMContentLoaded', function() {
        const toggleInput = document.getElementById('audioToggleInput');
        
        if (toggleInput) {
            // Force the checkbox state to UNCHECKED immediately
            toggleInput.checked = false;
        }
    });
  window.addEventListener('pageshow', function(event) {
        // 'pageshow' event runs even when navigating back from history
        if (event.persisted) {
            const toggleInput = document.getElementById('audioToggleInput');
            if (toggleInput) {
                toggleInput.checked = false;
            }
        }
    });
  audio.play().then(() => {
    // Hide the button once audio starts
    document.querySelector(".audio-overlay").style.display = "none";
    document.querySelector(".switch").style.display = "none";
    document.querySelector(".toggle-lever").style.display = "none";
  }).catch(err => {
    console.log("Autoplay blocked until user interaction:", err);
  });


}

function toggle_switched(){
  setTimeout(play_audio, 400)
}