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
};

/* window.addEventListener(touchEvent, makeSound); */

function makeSound(pressedKey, releasedKey) {
   audioContext = new (window.AudioContext || window.webkitAudioContext)();

   gainNode = audioContext.createGain();

   gainNode.connect(audioContext.destination);

   createOsc(pressedKey);

   const currentTime = audioContext.currentTime;
   oscillators.forEach(function (oscillator) {
      // The next line is probably not needed.
      // currentTime = audioContext.currentTime;
      oscillator.start(currentTime);
      oscillator.stop(currentTime + 0.22);
   });
}

function createOsc(freq) {
   const oscillator = audioContext.createOscillator();

   oscillator.frequency.value = freq;
   oscillator.connect(gainNode);
   oscillators.push(oscillator);

   gainNode.gain.value = 1 / oscillators.length;

   console.log(oscillators);
}

function startOscillator() {}

addEventListener("keydown", (event) => {
   if (event.repeat) return;
   if (event.key === "a" || "s" || "d" || "f" || "g" || "h" || "j") {
      if (event.key === "a") {
         console.log(activeKey.active[event.key]);
         activeKey.active[event.key] = true;
         console.log(activeKey);
      }
      if (event.key === "s") {
         activeKey.s.active = true;
      }
      if (event.key === "d") {
         activeKey.d.active = true;
      }
      if (event.key === "f") {
         activeKey.f.active = true;
      }
      if (event.key === "g") {
         activeKey.g.active = true;
      }
      if (event.key === "h") {
         activeKey.h.active = true;
      }
      if (event.key === "j") {
         activeKey.j.active = true;
      }
   }
});

addEventListener("keyup", (event) => {
   if (event.key === "a" || "s" || "d" || "f" || "g" || "h" || "j") {
      if (event.key === "a") {
         activeKey.a.active = 0;
      }
      if (event.key === "s") {
         activeKey.s.active = false;
      }
      if (event.key === "d") {
         activeKey.d.active = false;
      }
      if (event.key === "f") {
         activeKey.f.active = false;
      }
      if (event.key === "g") {
         activeKey.g.active = false;
      }
      if (event.key === "h") {
         activeKey.h.active = false;
      }
      if (event.key === "j") {
         activeKey.j.active = false;
      }
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
