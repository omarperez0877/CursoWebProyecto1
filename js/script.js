document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById("profile-image");
    profileImage.classList.add("visible");

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff6347"; // Cambia el color del texto al pasar el cursor
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#fff"; // Restaura el color original del texto
        });
    });
});
