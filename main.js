let audioContext;
let gainNode;/* 
let touchEvent = "ontouchstart" in window ? "touchstart" : "click"; */

let oscillators = [];

const activeKey = {
   active: {
      a: false,
      s: false,
      d: false,
      f: false,
      g: false,
      h: false,
      j: false,
   },
   frequency: {
      a: 220,
      s: 246.93,
      d: 261.63,
      f: 293.66,
      g: 329.63,
      h: 349.23,
      j: 392,
   },
   assignedOscillator: {
      a: null,
      s: null,
      d: null,
      f: null,
      g: null,
      h: null,
      j: null,
   },
};

let heldDownKeys = 0.9;
/* window.addEventListener(touchEvent, makeSound); */

audioContext = new (window.AudioContext || window.webkitAudioContext)();
function makeSound(action, pressedFrequency, pressedKey) {
   gainNode = audioContext.createGain();

   gainNode.connect(audioContext.destination);

   createOsc(pressedFrequency);

   if (activeKey.assignedOscillator[pressedKey] === null) {
      activeKey.assignedOscillator[pressedKey] = oscillators.length - 1;
   }
   console.log(activeKey.assignedOscillator[pressedKey]);

   const currentTime = audioContext.currentTime;

   if (action === "play") {
      oscillators[activeKey.assignedOscillator[pressedKey]].start(currentTime);
   }
   if (action === "stop") {
         const attackTime = 0.2;
   const startTime = audioContext.currentTime;

   gainNode.gain.setValueAtTime(0, startTime);
   gainNode.gain.setTargetAtTime(1 / heldDownKeys, startTime, attackTime);
      oscillators[activeKey.assignedOscillator[pressedKey]].stop(
         currentTime /* + 0.22 */,
      );

      activeKey.assignedOscillator[pressedKey] = null;
   }
}

function createOsc(selectedFrequency) {
   const oscillator = audioContext.createOscillator();

   oscillator.frequency.value = selectedFrequency;
   oscillator.connect(gainNode);
   oscillators.push(oscillator);

   const attackTime = 0.002;
   const startTime = audioContext.currentTime;

   gainNode.gain.setValueAtTime(0, startTime);
   gainNode.gain.setTargetAtTime(1 / heldDownKeys, startTime, attackTime);
}

addEventListener("keydown", (event) => {
   if (event.repeat) return;
   if (
      event.key === "a" ||
      event.key === "s" ||
      event.key === "d" ||
      event.key === "f" ||
      event.key === "g" ||
      event.key === "h" ||
      event.key === "j"
   ) {
      heldDownKeys = heldDownKeys * 2;
      activeKey.active[event.key] = true;
      console.log(activeKey.active);
      makeSound("play", activeKey.frequency[event.key], event.key);
   }
});

addEventListener("keyup", (event) => {
   if (
      event.key === "a" ||
      event.key === "s" ||
      event.key === "d" ||
      event.key === "f" ||
      event.key === "g" ||
      event.key === "h" ||
      event.key === "j"
   ) {
      heldDownKeys = heldDownKeys / 2;
      activeKey.active[event.key] = false;
      console.log(activeKey.active);
      makeSound("stop", activeKey.frequency[event.key], event.key);
   }
});
