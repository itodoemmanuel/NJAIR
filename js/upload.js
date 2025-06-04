document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];
    if (file && file.type === "application/pdf") {
      alert("Thanks for your submission. Please email the PDF to: journal@njair.edu.ng");
    } else {
      alert("Only PDF files are accepted.");
    }
  });
  