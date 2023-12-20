// This script is intended to be run in a browser environment
const video = document.getElementById('my-video');
const overlays = []; // Array to store overlay objects

// Load clickable objects from JSON
fetch('index.json')
    .then(response => response.json())
    .then(data => {
        // Create overlays based on JSON data
        data.forEach(obj => {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.style.top = obj.top + 'px';
            overlay.style.left = obj.left + 'px';
            overlay.style.width = obj.width + 'px';
            overlay.style.height = obj.height + 'px';
            overlay.style.backgroundColor = obj.backgroundColor;
            overlay.innerHTML = obj.label;

            overlay.addEventListener('click', () => handleClick(obj.timestamp));

            document.getElementById('video-container').appendChild(overlay);
            overlays.push(overlay);
        });
    });

function handleClick(timestamp) {
    // Handle the click event for each object
    video.currentTime = timestamp;
}

// Add event listener to update the position of the overlays when the video time changes
video.addEventListener('timeupdate', updateOverlayPosition);

function updateOverlayPosition() {
    // Adjust the position of overlays based on the video's current time
    const currentTime = video.currentTime;

    // You can add logic here to show/hide or move overlays based on the current time
    // For simplicity, this example keeps the overlays fixed
}