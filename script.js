const newYear = new Date('01/01/2022');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
 
countDown = () => {
    const today = new Date();
    const secPerDay = 60 * 60 * 24;
    const secPerHour = 60 * 60;
    const secPerMinute = 60;

    var dateDif = (newYear - today) / 1000;
    
    const days = Math.floor(dateDif / secPerDay);
    dateDif -= days * secPerDay;

    var hours = Math.floor(dateDif / secPerHour) % 24;
    dateDif -= hours * secPerHour;

    const minutes = Math.floor(dateDif / secPerMinute) % 60; 
    dateDif -= minutes * secPerMinute;

    const seconds = Math.floor(dateDif);
    
    
    daysEl.innerText = days;
    hoursEl.innerText = formatTime(hours);;
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
}

formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);