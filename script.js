// Function to change background color
function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
}

// Add click events for journey cards
document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("#2CA02C"));
document.getElementById('react').addEventListener('click', () => changeBackgroundColor("#FF7F0E"));
document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("#9467BD"));

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.navbar-items a');
    
    // Add click event listener to each link for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Calculate position with offset for fixed navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            // Scroll smoothly to the target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // Display current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});