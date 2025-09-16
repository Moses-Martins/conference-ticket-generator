// Read query parameters
const params = new URLSearchParams(window.location.search);
const fullname = params.get("name");
const email = params.get("email");
const github = params.get("github");

// Fill in UI
document.getElementById("gen-name").textContent = fullname;
document.getElementById("gen-email").textContent = email;
document.getElementById("name").textContent = fullname;
document.getElementById("github").textContent = github.startsWith("@") ? github : "@" + github;
document.getElementById("image").textContent = photo;


// Generate random ticket ID
const ticketId = "#" + Math.floor(10000 + Math.random() * 90000);
document.getElementById("id").textContent = ticketId;