const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

function updateClock() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    
    const hourDeg = hour / 12 * 360;
    hourElement.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = minute / 60 * 360;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = second / 60 * 360;
    secondElement.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);