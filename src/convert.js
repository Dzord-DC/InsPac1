export function timeToNum(time) {
    return time[4] * 60 + time[3] * 10 * 60 + time[1] * 60 * 60 + time[0] * 60 * 60 * 10;
}

export function NumToTime(register, sec) {
    let time = ["0", ":", "0"];
    let r = register;
    time[0] = Math.floor((r / 3600) % 10);
    r = r - time[0] * 3600;
    time[2] = Math.floor((r / 60));

    return `${time[0]}:${time[2]}:${sec}`
}