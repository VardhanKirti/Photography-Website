
        // External JavaScript code in your-script.js
        document.addEventListener("DOMContentLoaded", function () {
            // Function to change the navigation bar background color
            function changeNavbarColor() {
                var navBar = document.querySelector('.nav');
                navBar.style.backgroundColor = 'lightcoral';
            }

            // Event listener for the "Explore Now" button
            var exploreButton = document.querySelector('.explore_btn');
            exploreButton.addEventListener('click', changeNavbarColor);
        });
   