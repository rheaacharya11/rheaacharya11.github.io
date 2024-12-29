document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    const descriptions = document.querySelectorAll('.description');
    const closeButtons = document.querySelectorAll('.close-btn');

    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const description = document.getElementById(targetId);

            // Hide all descriptions
            descriptions.forEach(desc => {
                desc.style.display = 'none';
            });

            // Get the circle's position and description attributes
            const circleLeft = parseFloat(circle.style.left);
            const circleTop = parseFloat(circle.style.top);
            const descLeft = parseFloat(circle.getAttribute('data-desc-left'));
            const descTop = parseFloat(circle.getAttribute('data-desc-top'));
            const direction = circle.getAttribute('data-direction');

            // Calculate the initial position for the description
            let descriptionLeft = 6 * descLeft;
            let descriptionTop = 6 * descTop;

            // Adjust position based on the direction
            if (direction === 'left') {
                descriptionLeft = circleLeft - description.offsetWidth - 10;
            } else if (direction === 'right') {
                descriptionLeft = circleLeft + 60; // 10px offset + 50px circle width
            }

            // Ensure the description is within the viewport
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;

            if (descriptionLeft + description.offsetWidth > containerWidth) {
                descriptionLeft = containerWidth - description.offsetWidth - 10;
            }

            if (descriptionTop + description.offsetHeight > containerHeight) {
                descriptionTop = containerHeight - description.offsetHeight - 10;
            }

            if (descriptionLeft < 0) {
                descriptionLeft = 10;
            }

            if (descriptionTop < 0) {
                descriptionTop = 10;
            }

            description.style.left = `${descriptionLeft}px`;
            description.style.top = `${descriptionTop}px`;

            // Toggle the display of the description
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });

    // Add event listener to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    menuToggle.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});


