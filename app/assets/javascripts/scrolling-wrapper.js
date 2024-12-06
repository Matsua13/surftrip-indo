// Run the following code when the window has fully loaded
window.onload = function() {

  // Select the element with the class 'scrolling-wrapper' and store it in the variable 'scrollingWrapper'
  const scrollingWrapper = document.querySelector('.scrolling-wrapper');

  // Initialize a boolean variable 'isScrolling' to false, which will track whether the container should be scrolling
  let isScrolling = false;

  // Add an event listener to 'scrollingWrapper' that triggers when the mouse enters the container
  scrollingWrapper.addEventListener('mouseover', function(e) {
    // Set 'isScrolling' to true, indicating that scrolling should start
    isScrolling = true;
  });

  // Add an event listener to 'scrollingWrapper' that triggers when the mouse leaves the container
  scrollingWrapper.addEventListener('mouseout', function(e) {
    // Set 'isScrolling' to false, indicating that scrolling should stop
    isScrolling = false;
  });

  // Set an interval to repeatedly execute the following function every 10 milliseconds
  setInterval(function() {
    // Check if 'isScrolling' is true (i.e., if the mouse is hovering over the container)
    if (isScrolling) {
      // Increase the 'scrollLeft' property of 'scrollingWrapper' by 2 pixels
      // This causes the container to scroll to the right
      scrollingWrapper.scrollLeft += 2;
    }
  }, 10); // The function inside setInterval runs every 10 milliseconds
};
