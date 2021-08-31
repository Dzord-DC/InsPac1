export const formTimer = document.getElementById('timer-form');
import { errorForm } from "./common.js";

let inputTime = document.getElementById('time');
let startBut = document.getElementById('start');
let stopBut = document.getElementById('stop');
let massage = document.getElementById('message');
const completeAudio = new Audio('/media/complete.mp3');
let runTime = false;

startBut.addEventListener('click', () => {
    event.preventDefault();
    if (inputTime.value <= 0) {
        massage.innerHTML = errorForm("Заполните поле");
    }
    else {
        if (runTime) {
            massage.innerHTML = errorForm("Таймер уже запущен");
        }
        else {
            //Здесь должна быть функция преобразование времени в секунды
            runTime = true;
            massage.innerText = "";
            let timerId = setInterval(() => {
                if (runTime) {
                    inputTime.value--;
                    //а здесь обратное преобразование в строку
                    if (inputTime.value <= 0) {
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