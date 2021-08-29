import { errorForm } from "./common.js";
import { diffDate, diffToHtml } from "./diff.js";


export const formElement = document.getElementById('dateCalc-form');
const resultElement = document.getElementById('dateCalc-result');

formElement.addEventListener('submit', hendleSubmit);


function hendleSubmit() {
    event.preventDefault();
    resultElement.innerHTML = '';
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;
    if (firstDate && secondDate) {
        resultElement.innerHTML = diffToHtml(diffDate(firstDate, secondDate));
    }
    else {
        resultElement.innerHTML = errorForm('Заполние оба поля');
    }
}