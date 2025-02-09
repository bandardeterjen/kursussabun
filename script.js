document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('#contact-form input[type="text"]').value;
  const email = document.querySelector('#contact-form input[type="email"]').value;
  const message = document.querySelector('#contact-form textarea').value;

  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate sending an email (you can replace this with actual backend logic)
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Reset form
  event.target.reset();
});
