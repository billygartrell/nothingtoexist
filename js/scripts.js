
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
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    const setMenuOpen = (open) => {
      navToggle.setAttribute("aria-expanded", String(open));
      navLinks.classList.toggle("open", open);
    };

    navToggle.addEventListener("click", () => {
      setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    navToggle.closest("nav").addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        navToggle.focus();
      }
    });
  }

  const nav = document.querySelector(".nav, .home-nav");
  if (nav) {
    const updateStickyBorder = () => {
      const isSticky = window.scrollY > 0 && nav.getBoundingClientRect().top <= 0;
      nav.classList.toggle("is-sticky", isSticky);
    };
    window.addEventListener("scroll", updateStickyBorder, { passive: true });
    window.addEventListener("resize", updateStickyBorder);
    updateStickyBorder();
  }
});





