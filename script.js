function updateTime() {
    const now = new Date();

    const nyTime = now.toLocaleString("en-US", { timeZone: "America/New_York" });
    document.getElementById("time-ny").textContent = nyTime;
    document.getElementById("time-ny").classList.add("flashy");

    const londonTime = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
    document.getElementById("time-london").textContent = londonTime;
    document.getElementById("time-london").classList.add("flashy");

    const ktmTime = now.toLocaleString("en-NP", { timeZone: "Asia/Kathmandu" });
    document.getElementById("time-kathmandu").textContent = ktmTime;
    document.getElementById("time-kathmandu").classList.add("flashy");
}

setInterval(updateTime, 1000);
updateTime();

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function updateClock(clockId, timeZone) {
    const now = new Date();
    const options = { timeZone: timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', options);
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    const clock = document.getElementById(clockId);
    clock.querySelector('.second-hand').style.transform = `rotate(${secondsDeg}deg)`;
    clock.querySelector('.minute-hand').style.transform = `rotate(${minutesDeg}deg)`;
    clock.querySelector('.hour-hand').style.transform = `rotate(${hoursDeg}deg)`;
}

function updateClocks() {
    updateClock('clock-ny', 'America/New_York');
    updateClock('clock-london', 'Europe/London');
    updateClock('clock-kathmandu', 'Asia/Kathmandu');
}

setInterval(updateClocks, 1000);
updateClocks();

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tablink').click();
});
