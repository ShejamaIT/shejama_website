document.addEventListener("DOMContentLoaded", function () {
    setupSignUp();
});

function setupSignUp() {
    const signupForm = document.querySelector("#signup-form"); // The form with the id 'signup-form'

    if (signupForm) {
        signupForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get the form data
            const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const password = document.querySelector('input[name="password"]').value.trim();

            // Check if all fields are filled
            if (!name || !email || !password) {
                alert("⚠️ Please fill out all fields.");
                return;
            }

            // Validate password length
            if (password.length < 6) {
                alert("⚠️ Password must be at least 6 characters.");
                return;
            }

            try {
                // Send POST request to the backend API
                const response = await fetch("http://localhost:5000/custsignup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password }),
                });

                const result = await response.json();

                // Check if the signup was successful
                if (result.success) {
                    alert("✅ Sign-up successful! Redirecting to login...");
                    window.location.href = "pages-sign-in.html"; // Redirect to sign-in page
                } else {
                    alert("❌ Sign-up failed: " + result.message);
                }
            } catch (error) {
                console.error("Error during sign-up:", error);
                alert("❌ An error occurred. Please try again.");
            }
        });
    }
}
