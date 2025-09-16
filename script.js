Dropzone.autoDiscover = false; // important!

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

    // Replace icon with uploaded image preview
    if (file.type.startsWith("image/")) {
        const img = document.getElementById("icon-upload");
        img.src = URL.createObjectURL(file);
        document.querySelector(".drop-zone__prompt").style.display = "none";

    }
})



document.getElementById("my-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullname = encodeURIComponent(document.getElementById("name").value);
  const email = encodeURIComponent(document.getElementById("email").value);
  const github = encodeURIComponent(document.getElementById("github").value);

  // Redirect to ticket page with query string
  window.location.href = `ticket.html?name=${fullname}&email=${email}&github=${github}`;
})