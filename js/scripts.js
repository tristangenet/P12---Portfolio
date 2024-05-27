document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const formMessage = document.getElementById('formMessage');

        let valid = true;

        if (name.value.trim() === '') {
            name.style.borderColor = 'red';
            valid = false;
        } else {
            name.style.borderColor = '';
        }

        if (email.value.trim() === '' || !email.value.includes('@')) {
            email.style.borderColor = 'red';
            valid = false;
        } else {
            email.style.borderColor = '';
        }

        if (message.value.trim() === '') {
            message.style.borderColor = 'red';
            valid = false;
        } else {
            message.style.borderColor = '';
        }

        if (valid) {
            formMessage.textContent = 'Merci pour votre message ! Je vous répondrai bientôt.';
            formMessage.className = '';
            document.getElementById('contactForm').reset();
        } else {
            formMessage.textContent = 'Veuillez remplir tous les champs correctement.';
            formMessage.className = '';
        }
    });

    // Pourcentage de compétences
    document.querySelectorAll('.circle').forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);
    });

    // Carrousel
    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        if (index >= slides.length) currentIndex = 0;
        if (index < 0) currentIndex = slides.length - 1;

        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex++;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex--;
        showSlide(currentIndex);
    }

    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

    showSlide(currentIndex);
});
