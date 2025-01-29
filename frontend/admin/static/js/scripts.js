document.addEventListener("DOMContentLoaded", function () {
    // Load the sidebar
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));

    // Load the navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
    // Load the signin page
    fetch("pages-sign-in.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sign-in").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
