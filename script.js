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
  // Handle form submission for the discussion board
document.getElementById('discussionForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload on form submit
  
  const username = document.getElementById('username').value;
  const postMessage = document.getElementById('postMessage').value;

  if (username && postMessage) {
    const post = {
      username: username,
      message: postMessage,
      timestamp: new Date().toLocaleString(),
    };

    // Save the new post to localStorage
    const posts = JSON.parse(localStorage.getItem('discussionPosts')) || [];
    posts.push(post);
    localStorage.setItem('discussionPosts', JSON.stringify(posts));

    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('postMessage').value = '';

    // Update the posts display
    displayPosts();
  }
});

// Display posts from localStorage
function displayPosts() {
  const posts = JSON.parse(localStorage.getItem('discussionPosts')) || [];
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = ''; // Clear current posts

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    postElement.innerHTML = `
      <h4>${post.username} <small>(${post.timestamp})</small></h4>
      <p>${post.message}</p>
    `;
    
    postsContainer.appendChild(postElement);
  });
}

// Initialize the display of posts when the page loads
document.addEventListener('DOMContentLoaded', function () {
  displayPosts();
});

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Poll Voting Functionality
document.getElementById('poll-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedBias = document.querySelector('input[name="bias"]:checked');
  if (selectedBias) {
      const resultText = `You voted for: ${selectedBias.value}`;
      document.getElementById('poll-result').innerText = resultText;
  } else {
      alert('Please select a bias!');
  }
});

// Fan Message Handling
document.getElementById('message-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload on form submission
  
  const message = document.getElementById('fan-message').value; // Get message from textarea
  
  if (message.trim()) {
      // Create a new <li> element to display the message
      const newMessage = document.createElement('li');
      newMessage.textContent = message; // Set the message text
      
      // Append the new message to the list of messages
      const messageList = document.getElementById('messages-list');
      messageList.appendChild(newMessage);
      
      // Clear the textarea after submitting
      document.getElementById('fan-message').value = '';
  } else {
      alert('Please write a message!');
  } 
}); 
