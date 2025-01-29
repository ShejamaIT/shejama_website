document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            // Highlight the active link
            const currentPage = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll(".nav-link");

            navLinks.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Error loading navbar:", error));

    // Load the footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
