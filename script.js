document.addEventListener('DOMContentLoaded', () => {
    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            // Toggle current
            if (body.style.maxHeight) {
                body.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close others
                document.querySelectorAll('.accordion-body').forEach(item => {
                    item.style.maxHeight = null;
                });
                document.querySelectorAll('.accordion-header i').forEach(item => {
                    item.style.transform = 'rotate(0deg)';
                });

                body.style.maxHeight = body.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Intersection Observer for Fade In Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .offer-card').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
