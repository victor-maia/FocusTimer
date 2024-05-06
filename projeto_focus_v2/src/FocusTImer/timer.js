import * as el from "./elements.js";
import state from './state.js'; 
import { kitchenTimer } from './sounds.js'

let minutes = Number(el.minutesDisplay.textContent); // Obtem o valor atual dos minutos do elemento DOM
let seconds = Number(el.secondsDisplay.textContent); // Obtem o valor atual dos segundos do elemento DOM

function updateDisplay() {
    el.minutesDisplay.textContent = String(minutes).padStart(2, "0"); // Atualiza o valor exibido dos minutos
    el.secondsDisplay.textContent = String(seconds).padStart(2, "0"); // Atualiza o valor exibido dos segundos
}

let intervalId; // Variável para armazenar o ID do intervalo

export function plusTimer(){
    minutes = minutes + 5;
    
    if(minutes > 60){
        minutes = 60;
        seconds = 0;
    }
    updateDisplay()
    
}

export function minusTimer() {
    minutes = minutes - 5;

    if(minutes < 5) {
        minutes = 5;
        seconds = 0;
    }
    updateDisplay()
}

export function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        if (state.isRunning) {
            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    clearInterval(intervalId);
                    kitchenTimer.play()
                }
            }
            updateDisplay(); // Atualiza o display a cada segundo
        }
    }, 1000); // Intervalo de 1 segundo
}

export function stopTimer() {
    clearInterval(intervalId);
    minutes = 20;
    seconds = 0;
    updateDisplay();
}


