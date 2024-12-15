
// Initialize EmailJS
(function () {
  emailjs.init("SmqZ89lRPIr5Ybsbl"); // Replace with your EmailJS Public Key
})();

// Handle form submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Send email using EmailJS
  emailjs.send("service_n6zu4b4", "template_ex49w8t", templateParams)
    .then((response) => {
      alert("Message sent successfully!");
      console.log("Success:", response.status, response.text);

      // Optional: Clear the form
      form.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Please try again later.");
      console.error("Error:", error);
    });
});
