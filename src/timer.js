export const formTimer = document.getElementById('timer-form');
import { errorForm } from "./common.js";
import { timeToNum } from "./convert.js";
import { NumToTime } from "./convert.js"

let inputTime = document.getElementById('time');
let startBut = document.getElementById('start');
let stopBut = document.getElementById('stop');
let massage = document.getElementById('message');
let timeV = document.getElementById('time-v');
const completeAudio = new Audio('/media/complete.mp3');
let runTime = false;
let timeRegister = 0;
let seconds = 0;

startBut.addEventListener('click', () => {
    event.preventDefault();
    if (runTime) {
        massage.innerHTML = errorForm("Таймер уже запущен");
    }
    else {
        //Здесь должна быть функция преобразование времени в секунды
        timeRegister = timeToNum(inputTime.value);
        if (timeRegister <= 0 || isNaN(timeRegister)) {
            massage.innerHTML = errorForm("Заполните поле");
        }
        else {
            runTime = true;
            timeV.innerHTML = "";
            massage.innerText = "";
            let timerId = setInterval(() => {
                if (runTime) {
                    timeRegister--;
                    //а здесь обратное преобразование в строку
                    seconds = timeRegister % 60
                    timeV.innerHTML = NumToTime(timeRegister, seconds);

                    if (timeRegister <= 0) {
                        massage.innerText = "Сработка";
                        runTime = false;
                        completeAudio.play();
                        clearInterval(timerId);
                    }
                }
                else {
                    clearInterval(timerId);
                }
            }, 1000);
        }
    }

})


stopBut.addEventListener('click', () => {
    event.preventDefault();
    if (runTime) {
        massage.innerHTML = errorForm("Таймер остановлен");
        runTime = false;
        completeAudio.pause();

    }
});