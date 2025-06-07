// JavaScript for SreeVerse – Dark Mode, Typewriter, Motivation, and Contact Form

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function showMotivation() {
  const messages = [
    "🌟 Believe in yourself. You’re doing amazing!",
    "🚀 You’ve started something awesome!",
    "🔥 Sree, your journey has begun!",
    "✨ Every line of code makes you better!"
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  alert(msg);
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you for your message! We'll get back to you soon.");
  this.reset();
});
