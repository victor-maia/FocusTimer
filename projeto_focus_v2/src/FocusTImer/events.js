
import * as elements from "./elements.js";
import state from './state.js'; 
import { clickButton, coffeeAudio, fireplaceAudio, rainAudio, forestAudio } from './sounds.js'
import  { startTimer} from './timer.js';
import  { stopTimer} from './timer.js';
import  { plusTimer} from './timer.js';
import  { minusTimer} from './timer.js';

function toggleRunning() {
    elements.playButton.classList.toggle("hide")
    elements.pauseButton.classList.toggle("hide")
    clickButton.play()
}



elements.playButton.addEventListener('click', () =>{
    toggleRunning();
    state.isRunning = true;
    elements.stopButton.classList.remove("hide");
    console.log(state.isRunning)
    startTimer();
    clickButton.play()
});

elements.pauseButton.addEventListener('click', () => {
    toggleRunning();
    state.isRunning = false;
    elements.stopButton.classList.add("hide");
    console.log(state.isRunning)
    startTimer()
    clickButton.play()
});




elements.stopButton.addEventListener('click', () => {
    state.isRunning = false;
    elements.stopButton.classList.add('hide')
    console.log(state.isRunning)
    toggleRunning()
    stopTimer()
    clickButton.play()
});

elements.plusButton.addEventListener('click', () => {
    clickButton.play()
    plusTimer()
});

elements.minusButton.addEventListener('click', () => {
    clickButton.play()
    minusTimer()
    
});


elements.fireplace.addEventListener('click', () => {
    if (state.fireplaceisPlaying) {
        fireplaceAudio.pause();
        state.fireplaceisPlaying = false;
        elements.fireplace.classList.remove('active');
    } else {
        elements.fireplace.classList.add('active');
        fireplaceAudio.loop = true;
        fireplaceAudio.play();
        state.fireplaceisPlaying = true;
        
    }
});


elements.coffeeShop.addEventListener('click', () => {
    if (state.coffeeisPlaying) {
        coffeeAudio.pause();
        state.coffeeisPlaying = false;
        elements.coffeeShop.classList.remove('active');
    } else {
        elements.coffeeShop.classList.add('active');
        coffeeAudio.loop = true;
        coffeeAudio.play();
        state.coffeeisPlaying = true;
        
    }
});



elements.forest.addEventListener('click', () => {
    if (state.forestisPlaying) {
        forestAudio.pause();
        state.forestisPlaying = false;
        elements.forest.classList.remove('active');
    } else {
        elements.forest.classList.add('active');
        forestAudio.loop = true;
        forestAudio.play();
        state.forestisPlaying = true;
        
    }
});




elements.rain.addEventListener('click', () => {
    if (state.rainisPlaying) {
        rainAudio.pause();
        state.rainisPlaying = false;
        elements.rain.classList.remove('active');
    } else {
        elements.rain.classList.add('active');
        rainAudio.loop = true;
        rainAudio.play();
        state.rainisPlaying = true;
        
    }
});
