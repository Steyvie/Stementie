function updateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('datetime').innerText = `${formattedDate} ${formattedTime}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately