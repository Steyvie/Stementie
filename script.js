function updateClock() {
    const now = new Date();
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    
    const date = now.toLocaleDateString(undefined, { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('day').textContent = day;
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = currentTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
