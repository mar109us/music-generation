let audioContext;
let gainNode;
let touchEvent = "ontouchstart" in window ? "touchstart" : "click";

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

/* window.addEventListener(touchEvent, makeSound); */

function makeSound(action, pressedFrequency, pressedKey) {
   audioContext = new (window.AudioContext || window.webkitAudioContext)();

   gainNode = audioContext.createGain();

   gainNode.connect(audioContext.destination);

   createOsc(pressedFrequency);

   if (activeKey.assignedOscillator[pressedKey] === null) {
      activeKey.assignedOscillator[pressedKey] = oscillators.length - 1
   }
   console.log(activeKey.assignedOscillator[pressedKey])

   const currentTime = audioContext.currentTime;
   /* oscillators.forEach(function (oscillator) {
      oscillator.start(currentTime);
      oscillator.stop(currentTime + 0.22);
   }); */

   if (action === "play") {
      console.log(oscillators.pressedKey)
      /* oscillators[pressedKey].start(currentTime) */
   }
   if (action === "stop") {
      
   }
}

function createOsc(selectedFrequency) {
   const oscillator = audioContext.createOscillator();

   oscillator.frequency.value = selectedFrequency;
   oscillator.connect(gainNode);
   oscillators.push(oscillator);

   gainNode.gain.value = 1 / oscillators.length;

   console.log(oscillators);
}

function startOscillator() {}

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
      activeKey.active[event.key] = true;
      console.log(activeKey.active);
      makeSound("play", activeKey.frequency[event.key], event.key)
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
      activeKey.active[event.key] = false;
      console.log(activeKey.active);
   }

   /* makeSound(event.key, audioContext.currentTime); */
});

/* window.AudioContext = window.AudioContext || window.webkitAudioContext;

let audioContext = new AudioContext();
let nextNotetime = audioContext.currentTime;
let timerID;

if (audioContext.state === "suspended") {
   audioContext.resume();
}
let keyA = false;
let keyS = false;

function playSound(time, keyPressed) {
   if (keyPressed === "a") {
      keyA = true;
   }
   if (keyA) {
      let osc = audioContext.createOscillator();
      osc.connect(audioContext.destination);
      osc.frequency.value = 220;
      osc.start(time);
      osc.stop(time + 0.1);
      console.log("AAAAAA");
   }
   if (keyPressed === "s") {
      keyS = true;
   }
   if (keyS) {
      let osc = audioContext.createOscillator();
      osc.connect(audioContext.destination);
      osc.frequency.value = 246.93;
      osc.start(time);
      osc.stop(time + 0.1);
      console.log("SSSSSS");
   }
}

function scheduler(keyPressed) {
   while (nextNotetime < audioContext.currentTime) {
      nextNotetime += 0.1;
      playSound(nextNotetime, keyPressed);
   }
   timerID = window.setTimeout(scheduler, 1.0);
}

addEventListener("keydown", (event) => {
   if (event.key === "a") {
      if (event.repeat) return;
      scheduler(event.key);
      console.log("keydown", event.key);
   }
   if (event.key === "s") {
      if (event.repeat) return;
      scheduler(event.key);
      console.log("keydown", event.key);
   }
});

addEventListener("keyup", (event) => {
   if (event.key === "a") {
      clearTimeout(timerID);
      console.log("keyup", event.key);
   }
   if (event.key === "s") {
      clearTimeout(timerID);
      console.log("keyup", event.key);
   }
}); */

/* addEventListener("keydown", (event) => {
   if (event.key === "a") {
      if (event.repeat) return;
      const oscillator = audioCtx.createOscillator();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(220, audioCtx.currentTime); // value in hertz
      oscillator.connect(audioCtx.destination);
      oscillator.start(0);
      oscillator.stop(1);
      oscillator.start = 0;
   }
   if (event.key === "s") {
      if (event.repeat) return;
      const oscillator = audioCtx.createOscillator();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(246.93, audioCtx.currentTime); // value in hertz
      oscillator.connect(audioCtx.destination);
      oscillator.start();
   }
   if (event.key === "d") {
      osc.frequency.value = 261.63;
   }
   if (event.key === "f") {
      osc.frequency.value = 293.66;
   }
   if (event.key === "g") {
      osc.frequency.value = 329.63;
   }
   if (event.key === "h") {
      osc.frequency.value = 349.23;
   }
   if (event.key === "j") {
      osc.frequency.value = 392;
   } else {
   }
}); */
