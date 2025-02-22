document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach(section => section.style.display = "none");

    document.getElementById("about").style.display = "block";
    setTimeout(() => document.getElementById("about").classList.add("active"), 10);

    function showSection(id, clickedLink) {
        sections.forEach(section => {
            if (section.id !== id) {
                section.classList.remove("active");
                setTimeout(() => {
                    section.style.display = "none";
                }, 500);
            }
        });

        const activeSection = document.getElementById(id);
        activeSection.style.display = "block";

        setTimeout(() => {
            activeSection.classList.add("active");
        }, 10);

        navLinks.forEach(link => link.classList.remove("active"));
        clickedLink.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.textContent.toLowerCase();
            showSection(sectionId, this);
        });
    });
});



