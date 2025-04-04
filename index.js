const emailInput = document.getElementById("email");
const textContainer = document.getElementById("text-container")
const imageContainer = document.getElementById("image-container")
const newsletterBtn = document.getElementById("newsletter-btn") // Assuming you have a button with this ID

// Function to validate email
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return regex.test(email);
}

newsletterBtn.addEventListener("click", function(e) {
    const emailValue = emailInput.value
    e.preventDefault()

    // Check if email is valid
    if (emailValue && isValidEmail(emailValue)) {
        // Hide elements with transition
        textContainer.classList.add("hidden")
        imageContainer.classList.add("hidden")
        document.getElementById("success-message").classList.remove("hidden")

    } else {
        // Show an error message if the email is invalid
        alert("Please enter a valid email address!")
    }
})


