const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation (can be improved)
  if (!name || !email || !message.trim()) {
    alert('Please fill in all required fields!');
    return;
  }

  // Simulate form submission (replace with actual submission logic)
  alert(`Thank you, ${name}, for your message! We will reply to your email (${email}) shortly.`);

  // Clear the form
  form.reset();
});
