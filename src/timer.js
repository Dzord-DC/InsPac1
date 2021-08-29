export const formTimer = document.getElementById('timer-form');
import { errorForm } from "./common.js";

let inputTime = document.getElementById('time');
let startBut = document.getElementById('start');
let stopBut = document.getElementById('stop');
let massage = document.getElementById('message')
const complete = new Audio('/media/complete.mp3')

startBut.addEventListener('click', () => {
    event.preventDefault();
    massage.innerText = "";
    if (inputTime.value <= 0) {
        massage.innerHTML = errorForm("Заполните поле");
        console.log(inputTime.value);
    }
    else {
        let timerId = setInterval(() => {
            stopBut.addEventListener('click', () => {
                event.preventDefault();
                clearInterval(timerId);
            });
            inputTime.value--;
            if (inputTime.value <= 0) {
                massage.innerText = "Сработка";
                complete.play();
                console.log(inputTime.value);
                clearInterval(timerId);
            }
        }, 1000)
    }
})


