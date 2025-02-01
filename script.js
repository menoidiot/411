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

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    document.querySelector('.second-hand').style.transform = `rotate(${secondsDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
