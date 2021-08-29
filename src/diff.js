import { DateTime } from "./luxon.js";

export const diffDate = (firstDate, secondDate) => {
    let firstDateDT = DateTime.fromISO(firstDate);
    let secondDateDT = DateTime.fromISO(secondDate);

    if (firstDateDT > secondDateDT) {
        [firstDateDT, secondDateDT] = [secondDateDT, firstDateDT];
    }


    return secondDateDT.diff(firstDateDT, ['years', 'months', 'days']);
}

export const diffToHtml = diff => `
<span>
${diff.years ? 'Лет: ' + diff.years : ''}
${diff.months ? 'Месяцев: ' + diff.months : ''}
${diff.days ? 'Дней: ' + diff.days : ''}
</span>`