// create web audio api context
/* const audioCtx = new AudioContext(); */
/*
// create Oscillator node
const oscillator = audioCtx.createOscillator();
 
oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start(); */

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();
var nextNotetime = audioContext.currentTime;
var timerID;

function playSound(time, setFrequency) {
   let savedFrequency;
   savedFrequency = setFrequency;
   var osc = audioContext.createOscillator();
   osc.connect(audioContext.destination);
   osc.frequency.value = 220;
   osc.start(time);
   osc.stop(time + 0.1);
   console.log("PLAYYYY");
}

function scheduler(setFrequency) {
   while (nextNotetime < audioContext.currentTime + 0.1) {
      nextNotetime += 0.1;
      playSound(nextNotetime, setFrequency);
   }

   timerID = window.setTimeout(scheduler, 10.0);
}

if (audioContext.state === "suspended") {
   audioContext.resume();
}

/* const keysPressed = {};

window.addEventListener('keydown', (e) => {
    keysPressed[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keysPressed[e.key] = false;
}); */

addEventListener("keydown", (event) => {
   if (event) {
      if (event.repeat) return;
      scheduler(220);
      console.log("keydown", event.key);
   }
});

addEventListener("keyup", (event) => {
   if (event) {
       clearTimeout(timerID);
      console.log("keyup", event.key);
   }
});

/* stopBtn.addEventListener(
   "click",
   function () {
      clearTimeout(timerID);
   },
   false,
); */

/* if (audioContext.state === "suspended") {
   audioContext.resume();
} */

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
