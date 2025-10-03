//  Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//  Animate Box on Button Click
const animateBtn = document.getElementById("animateBtn");
const animatedBox = document.getElementById("animatedBox");

if (animateBtn) {
  animateBtn.addEventListener("click", () => {
    animatedBox.style.transform = "rotate(360deg)";
    setTimeout(() => (animatedBox.style.transform = "rotate(0deg)"), 1000);
  });
}

//  Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
      alert(`Thanks ${name}, your message has been sent!`);
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}

//  Theme Toggle with Scope + Return Example
const themeToggle = document.getElementById("themeToggle");

function toggleTheme(currentTheme) {
  // function with parameter + return value
  return currentTheme === "dark" ? "light" : "dark";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    let currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    let newTheme = toggleTheme(currentTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  });
}

// Load stored theme on page load
window.addEventListener("load", () => {
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark");
});
