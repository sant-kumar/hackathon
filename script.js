
const detailsLinks = document.querySelectorAll('.details-link');
        
    detailsLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const details = this.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });
