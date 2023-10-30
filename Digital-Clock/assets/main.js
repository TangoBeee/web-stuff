const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const ampmElement = document.getElementById("ampm");

function updateClock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    let ampm = "AM";

    if(hour > 12) {
        hour = hour-12;
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }

    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;

    if(hour == 00) {
        hour = 12;
    }

    hourElement.innerText = hour;
    minuteElement.innerText = minute;
    secondElement.innerText = second;
    ampmElement.innerText = ampm;


    setTimeout(() => {
        updateClock();
    }, 1000)

}

updateClock();