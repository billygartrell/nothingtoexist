
// Automatically add "arrow" icon to external links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const url = new URL(link.href, window.location.origin);

    // Skip internal links or anchor links
    const isExternal = url.hostname !== window.location.hostname;

    if (isExternal) {
      // Add icon only once
      if (!link.classList.contains("external-link")) {
        link.classList.add("external-link");
      }
    }
  });
});


// Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});





