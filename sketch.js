let osc;
let osc2;
let osc3;
let osc4;
let numbers = [1, 0];
let tones = [];
let mapp = [67, 69, 71, 72, 74, 76, 78, 79, 67, 69];
let mapp2 = [71, 73, 75, 76, 78, 80, 82, 83, 71, 73];
let mapp3 = [74, 76, 78, 79, 81, 83, 85, 86, 74, 76];
let mapp4 = [79, 81, 83, 84, 86, 88, 90, 91, 79, 81];
//                2   2   1   2   2   2   1   
//                x   x   #   x   x   x   #       
function setup() {
  noCanvas();
  for(let i = 1; i < 1000; i ++){
    let fib = numbers[i]+numbers[i-1];
    numbers.push(fib);
  }
  for(let j = 0; j < numbers.length; j++){
    let fib = numbers[j];
    let fibArr = fib.toString().split("").map(Number);
    for(let i = 0; i < fibArr.length-1; i ++){
      tones.push(fibArr[i]);
    }
  }
  frameRate(10);
}

function draw(){
  if(osc && osc.started && frameCount % 1 === 0){
    osc.amp(1);
    osc.freq(midiToFreq(mapp[tones[frameCount/10]]));
    osc.amp(0, 0.2);
    osc2.amp(1);
    osc2.freq(midiToFreq(mapp2[tones[frameCount/10]]));
    osc2.amp(0, 0.2);
    osc3.amp(1);
    osc3.freq(midiToFreq(mapp3[tones[frameCount/10]]));
    osc3.amp(0, 0.2);
    osc4.amp(1);
    osc4.freq(midiToFreq(mapp4[tones[frameCount/10]]));
    osc4.amp(0, 0.2);
  }
}

function mousePressed() {
  osc = new p5.Oscillator();
  osc.freq(220);
  osc.setType('square');
  osc.amp(0);
  osc.start();
  osc2 = new p5.Oscillator();
  osc2.freq(220);
  osc2.setType('square');
  osc2.amp(0);
  osc2.start();
  osc3 = new p5.Oscillator();
  osc3.freq(220);
  osc3.setType('square');
  osc3.amp(0);
  osc3.start();
  osc4 = new p5.Oscillator();
  osc4.freq(220);
  osc4.setType('square');
  osc4.amp(0);
  osc4.start();
}
