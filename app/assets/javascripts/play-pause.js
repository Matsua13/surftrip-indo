document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("arugam-video");
  const playPauseButton = document.getElementById("play-pause-button");

  // Add a click event listener to the button
  playPauseButton.addEventListener("click", function() {
      console.log("Button clicked!"); // Debugging: Check if button click is registered

      // Check if the video is paused
      if (video.paused) {
          video.play();  // Play the video
          video.muted = false;  // Unmute the video
          playPauseButton.textContent = "⏸️";  // Change button to pause icon
          console.log("Playing and unmuted");  // Debugging: Check if playing
      } else {
          video.pause();  // Pause the video
          video.muted = true;  // Mute the video
          playPauseButton.textContent = "▶️";  // Change button to play icon
          console.log("Paused and muted");  // Debugging: Check if paused
      }
  });
});
