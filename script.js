document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
    
    // Print functionality
    document.getElementById('print-btn').addEventListener('click', function() {
        window.print();
    });
    
    // Simple animation on load
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.3s ${index * 0.1}s ease, transform 0.3s ${index * 0.1}s ease`;
        
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 100);
    });
});