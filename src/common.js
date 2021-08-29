export function errorForm(text) {
    return `<span style="color: red;">
    ${text}
    </span>`
}

export function dropping(className) {
    let activeMas = document.querySelectorAll(`.${className}`);
    activeMas.forEach((el) => {
        el.classList.remove(`${className}`);
    })
}