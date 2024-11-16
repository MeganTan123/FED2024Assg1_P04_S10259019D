// Scroll to Top Button
window.onscroll = function() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  // Handle Form Submission
  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the default form submission
  
      // Simulate sending the form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && message) {
          // Show success message
          const formStatus = document.getElementById("formStatus");
          formStatus.textContent = "Thank you for your message! We will get back to you soon.";
          formStatus.style.display = "block";
          formStatus.className = "success";
          
          // Optionally clear the form fields
          document.getElementById("contactForm").reset();
      } else {
          // Show error message
          const formStatus = document.getElementById("formStatus");
          formStatus.textContent = "Please fill in all fields.";
          formStatus.style.display = "block";
          formStatus.className = "error";
      }
  });
  