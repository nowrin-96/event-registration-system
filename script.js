document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const messageBox = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;

    if (!name || !email || !department || !year) {
      messageBox.style.color = "red";
      messageBox.textContent = "⚠️ Please fill in all required fields.";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      messageBox.style.color = "red";
      messageBox.textContent = "⚠️ Please enter a valid email address.";
      return;
    }

    messageBox.style.color = "green";
    messageBox.textContent = `✅ Registration successful for ${name} (${year}, ${department}).`;
    form.reset();
  });
});
