// create web audio api context
const audioCtx = new AudioContext();
/*
// create Oscillator node
const oscillator = audioCtx.createOscillator();
 
oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start(); */

addEventListener("keydown", (event) => {
   if (event.key === "a") {
      if (event.repeat) return;
      const oscillator = audioCtx.createOscillator();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(220, audioCtx.currentTime); // value in hertz
      oscillator.connect(audioCtx.destination);
      oscillator.start();
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
      oscillator.stop();
   }
});
