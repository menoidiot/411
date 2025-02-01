function updateTime() {
    const now = new Date();

    const nyTime = now.toLocaleString("en-US", { timeZone: "America/New_York" });
    document.getElementById("time-ny").textContent = nyTime;

    const londonTime = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
    document.getElementById("time-london").textContent = londonTime;

    const ktmTime = now.toLocaleString("en-NP", { timeZone: "Asia/Kathmandu" });
    document.getElementById("time-kathmandu").textContent = ktmTime;
}

setInterval(updateTime, 1000);
updateTime();
