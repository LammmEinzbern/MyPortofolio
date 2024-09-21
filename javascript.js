// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animation on scroll effect
const elements = document.querySelectorAll(".project-card");

const scrollAnimation = () => {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", scrollAnimation);

// Add the 'visible' class on load to animate in
window.onload = () => {
  scrollAnimation();
};
