window.addEventListener("DOMContentLoaded", () => {
  // Get stored data
  const ticketDataStr = localStorage.getItem("ticketData");

  // Parse it into a JavaScript object
  const ticketData = JSON.parse(ticketDataStr);

  // Now you can access individual properties
  const fullname = ticketData.fullname;
  const email = ticketData.email;
  const github = ticketData.github;
  const photo = ticketData.photo;

  // Fill in UI
  document.getElementById("gen-name").textContent = fullname;
  document.getElementById("gen-email").textContent = email;
  document.getElementById("name").textContent = fullname;
  document.getElementById("github").textContent =
    github.startsWith("@") ? github : "@" + github;

  if (photo) {
    const avatar = document.getElementById("avatar")
    avatar.src = photo;
    avatar.width = 50;
    avatar.height = 50;
  }

  // Generate random ticket ID
  const ticketId = "#" + Math.floor(10000 + Math.random() * 90000);
  document.getElementById("id").textContent = ticketId;
})