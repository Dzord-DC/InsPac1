import { formElement } from "./datecalc.js";
import { formTimer } from "./timer.js";
import { dropping } from "./common.js";
const dateCalcBut = document.getElementById('dateCalc');
const timetBut = document.getElementById('timer');

function switching(butActiv, form) {
    dropping('active');
    dropping('show');
    butActiv.classList.add('active');
    form.classList.add('show');
}

dateCalcBut.addEventListener('click', () => {
    switching(dateCalcBut, formElement);
})
timetBut.addEventListener('click', () => {
    switching(timetBut, formTimer);
})