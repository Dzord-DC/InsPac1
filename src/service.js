
import { dropping } from "./common.js";

const menuBut = document.querySelectorAll('.but-menu');
const formElements = document.querySelectorAll('.form-set');

// а здесь напишу переключаклу для множества форм
for (let i = 0; i < menuBut.length; i++) {
    menuBut[i].addEventListener('click', () => {
        switching(menuBut[i], formElements[i]);
    });
}

function switching(butActiv, form) {
    dropping('active');
    dropping('show');
    butActiv.classList.add('active');
    form.classList.add('show');
}