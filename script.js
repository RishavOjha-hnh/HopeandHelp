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
