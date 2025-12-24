// your code goes here
// Section animation observer
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
cards.forEach(card => observer.observe(card));

// GitHub main link
function openMainGit() {
  window.open("https://github.com/rayiyaswanth", "_blank");
}

// LinkedIn link
function openLinkedIn() {
  window.open("https://www.linkedin.com/in/rayi-yaswanth-a122462a9/", "_blank");
}

// Mail sender
function sendMail() {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=rayiyaswanth6108@gmail.com", "_blank");
}

// GitHub project links
function openLink(project) {
  const links = {
    "Campus-Placement-Quiz": "https://github.com/rayiyaswanth/Campus-Placement-Quiz",
    "Weather-Forecast": "https://github.com/rayiyaswanth/Weather-Forecast-Web-Application",
    "portfolio": "https://github.com/rayiyaswanth/portfolio-website"
  };
  window.open(links[project], "_blank");
}
