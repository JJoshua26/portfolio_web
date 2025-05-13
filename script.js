document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking on a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Active Menu Item on Scroll
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Animate Progress Bars on Scroll
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
    progressBars.forEach(bar => {
        const targetWidth = bar.dataset.width;

        // Reset animation
        bar.style.transition = 'none';
        bar.style.width = '0';

        // Force reflow
        void bar.offsetWidth;

        // Apply transition and animate to target width
        bar.style.transition = 'width 1s ease';
        bar.style.width = targetWidth;
    });
}


    
    // Intersection Observer for Animation
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'about') {
                    animateProgressBars();
                }
                
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Toggle menu open/close when hamburger is clicked
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('open');
        nav.classList.toggle('active');
    });
    
    // Close menu when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuBtn.classList.remove('open');
            nav.classList.remove('active');
            
            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked menu item
            this.classList.add('active');
        });
    });
});

});