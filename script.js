/*let counterHunger = 0;
let counterEnergy = 0;
let counterMood = 0;
let counterSeberazvitie = 0;*/

var gif; //0= default; 1- eating; 2- sleeping; 3- working; 4- slaying

const gif = document.getElementById("mouse-gif");

function change_gif(gif){
  if (gif==2){
    <img src="6w74GCnI.gif" //change to sleeping gif
  }
}

const counter = {
  counterHunger = 0;
  counterEnergy = 0;
  counterMood = 0;
  counterSeberazvitie = 0;
}

let timer1 = null;
let timer2 = null;
let timer3 = null;
let timer4 = null;


function eat(){
  counterHunger += 30;
  counterEnergy += 10;
  counterMood += 5;
}

function sleep(){
  counterHunger -+ 10;
  counterEnergy += 30;
}

function work(){
  counterHunger -= 10;
  counterEnergy -= 20;
  counterSeberazvitie += 30;
  counterMood -= 5;
}

function slay(){
  counterMood += 30;
  counterSeberazvitie += 20;
}

function updateBar() {
  const bar1 = document.getElementById("fillBarHunger");
  bar1.style.width = counterHunger + "%";   // set the width dynamically
  //bar.textContent = counter + "%";   // update text inside
  const bar2 = document.getElementById("fillBarEnergy");
  bar2.style.width = counterEnergy + "%";   // set the width dynamically
  //bar.textContent = counter + "%";   // update text inside
  const bar3 = document.getElementById("fillBarMood");
  bar3.style.width = counterMood + "%";   // set the width dynamically
  //bar.textContent = counter + "%";   // update text inside
  const bar4 = document.getElementById("fillBarSeberazvitie");
  bar4.style.width = counterSeberazvitie + "%";   // set the width dynamically
  //bar.textContent = counter + "%";   // update text inside
}

function startDecreasingBars(counter, updateBar) {
  Object.keys(counter).forEach()
  if (timer1 || timer2 || timer3 || timer4) return; // don’t start multiple timers
  timer1 = setInterval(() => {

    if (counter > 0) {
      counter -= 10; // decrease slowly
      updateBar();
    } else {
      clearInterval(timer1); // stop when reaches 0
      timer1 = null;
    }
  }, 5000); // decrease every 3 seconds
}
function startDecreasingEnergy() {

  if (timer2) return; // don’t start multiple timers
  timer2 = setInterval(() => {

    if (counterEnergy > 0) {
      counterEnergy -= 10; // decrease slowly
      updateBar();
    } else {
      clearInterval(timer2); // stop when reaches 0
      timer2 = null;
    }
  }, 5000); // decrease every 3 seconds
}
function startDecreasingMood() {

  if (timer3) return; // don’t start multiple timers
  timer3 = setInterval(() => {

    if (counterMood > 0) {
      counterMood -= 10; // decrease slowly
      updateBar();
    } else {
      clearInterval(timer3); // stop when reaches 0
      timer3 = null;
    }
  }, 5000); // decrease every 3 seconds
}
function startDecreasingSeberazvitie() {

  if (timer4) return; // don’t start multiple timers
  timer4 = setInterval(() => {

    if (counterSeberazvitie > 0) {
      counterSeberazvitie -= 10; // decrease slowly
      updateBar();
    } else {
      clearInterval(timer4); // stop when reaches 0
      timer4 = null;
    }
  }, 5000); // decrease every 3 seconds
}


function krilataFrazaPopUp(){
  //popup krilata fraza
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  console.log("Popup function triggered");
}

window.krilataFrazaPopUp = krilataFrazaPopUp;