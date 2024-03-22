document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact_form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(this);

        // Create URLSearchParams object to send form data
        const params = new URLSearchParams(formData);

        // Construct mailto URL with form data
        const mailtoURL = 'mailto:algorithm24710@gmail.com?' + params.toString();

        // Open default email client with pre-filled form data
        window.location.href = mailtoURL;

        // Optionally, you can reset the form after submission
        // document.getElementById('contact_form').reset();
    });
});
// document.addEventListener("DOMContentLoaded", function() {
//     resetForm();
// });

// function resetForm() {
//     // Reset the form fields by setting the iframe's src attribute to the same value
//     var iframe = document.getElementById('googleForm');
//     iframe.src = iframe.src;
// }