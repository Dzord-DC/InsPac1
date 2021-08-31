export function errorForm(text) {
    return `<span style="color: red;">
    ${text}
    </span>`
}
/**
 * Функция удаляет класс со все страницы 
 * 
 * @param {string} className название класса
 */
export function dropping(className) {
    let activeMas = document.querySelectorAll(`.${className}`);
    activeMas.forEach((el) => {
        el.classList.remove(`${className}`);
    })
}