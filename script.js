document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value.trim();
  const result = document.getElementById("result");

  if (!name || !email || !department) {
    result.style.color = "red";
    result.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  result.style.color = "green";
  result.textContent = `✅ Registration successful for ${name} from ${department}.`;
  document.getElementById("registrationForm").reset();
});