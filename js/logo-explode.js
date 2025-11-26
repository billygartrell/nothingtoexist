// Logo Explosion on Hover     
const imageElement = document.getElementById('gif');

// Define the URLs of the images you want to toggle between
const firstImage = 'star-gif.gif'; // The image to display on click
const secondImage = '1.png'; // The image to display after a few seconds

// Define the delay in milliseconds
const delay = 1200; // 2 seconds

// Add an event listener for click events on the image
imageElement.addEventListener('mouseover', () => {
// Change the image source on click
imageElement.src = firstImage;

// Change the image source back after the specified delay
setTimeout(() => {
    imageElement.src = secondImage;
}, delay);
});
