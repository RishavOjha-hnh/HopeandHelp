const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
<script>
function navigateToPage() {
    var dropdown = document.getElementById("about-dropdown");
    var selectedValue = dropdown.value;
    if (selectedValue) {
        // Redirects to the selected URL
        window.location.href = selectedValue;
    }
}
</script>
// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle Nav
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Dropdown Toggle for Mobile
const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();
    // Toggle display of dropdown menu
    const dropdownMenu = dropdownToggle.nextElementSibling;
    dropdownMenu.classList.toggle('show');
});
