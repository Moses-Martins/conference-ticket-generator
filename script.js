Dropzone.autoDiscover = false; // important!
let uploadedFile = null; // global variable to hold the file
const img = document.getElementById("icon-upload");
const myDropzone = new Dropzone("#my-form", {
    url: "/submit",              // where to send the file (your backend route)
    clickable: "#custom-drop",   // your custom div triggers the file picker
    previewsContainer: null,     // don't insert Dropzone previews
    maxFiles: 1,
    previewTemplate: "<div></div>",
    acceptedFiles: "image/*",
    autoProcessQueue: false      // disable auto-upload unless you want it
});

// When a file is added
myDropzone.on("addedfile", file => {
    console.log("File added:", file.name);

    uploadedFile = file
    

    // Replace icon with uploaded image preview
    if (file.type.startsWith("image/")) {
        img.src = URL.createObjectURL(file);
        const remove = document.getElementById("remove")
        remove.innerText = "Remove"
        document.querySelector(".drop-zone__prompt").style.display = "none";
    }
})


document.getElementById("remove").addEventListener("click", function(e) {

    e.stopPropagation();
  // Clear preview image
    img.src = "./assets/images/icon-upload.svg";
    uploadedFile = null;

    // Show the prompt again
    document.querySelector(".drop-zone__prompt").style.display = "block";

    // Reset remove button text
    this.innerText = "";

})


document.getElementById("my-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullname = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const github = document.getElementById("github").value.trim();
  const file = uploadedFile

 
  if (!file) {
    return alert("Please upload a photo.");
  }
  if (!file.type || !file.type.startsWith("image/")) {
    return alert("Please upload an image file (JPG/PNG).");
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    const ticketData = {
      fullname,
      email,
      github,
      photo: evt.target.result // data:image/...;base64,...
      // optionally you can also store a timestamp here
    };

    try {
      localStorage.setItem("ticketData", JSON.stringify(ticketData));
    } catch (err) {
      console.error("Could not save to localStorage:", err);
      alert("Sorry, could not save your image locally. Try a smaller file.");
      return;
    }

    // Redirect to ticket page
    window.location.href = "ticket.html";
  };

  reader.onerror = function() {
    alert("There was an error reading the image file.");
  };

  reader.readAsDataURL(file);
});