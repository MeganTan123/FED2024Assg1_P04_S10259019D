// Scroll to Top Button
window.onscroll = function() {toggleScrollToTopBtn()};

function toggleScrollToTopBtn() {
  const button = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block"; // Show the button
  } else {
    button.style.display = "none"; // Hide the button
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling back to the top
  });
}
