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
