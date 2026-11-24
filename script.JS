// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your email has been submitted.");

    contactForm.reset();

});


// PROJECT FILTERS

const filterButtons = document.querySelectorAll(".filters button");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        projectCards.forEach(function(card) {

            const category = card.getAttribute("data-category");

            if (filterValue === "all" || filterValue === category) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});