   
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});


const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());

        
        console.log('Form submitted:', formValues);

        
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}


const loginForm = document.querySelector('#loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;

       
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        
        console.log('Login attempt:', { email, rememberMe });

        // Simulate login success (replace with actual authentication)
        alert('Login successful! Welcome to StudentCare+.');
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        this.reset();
    });
}


const signupForm = document.querySelector('#signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const userType = document.getElementById('userType').value;

        // Validation
        if (!name || !email || !password || !confirmPassword || !userType) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        
        console.log('Signup attempt:', { name, email, userType });

        
        alert('Account created successfully! Please check your email for verification.');
        bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
        this.reset();
    });
}


document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains('show');

        
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('show');
        });

        
        if (!isOpen) {
            answer.classList.add('show');
        }
    });
});


const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .team-card, .service-card, .health-tip-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .team-card, .service-card, .health-tip-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    
    animateOnScroll();
});


window.addEventListener('scroll', animateOnScroll);

// QR Scan Button Event Listener
const qrScanBtn = document.getElementById('qrScanBtn');
if (qrScanBtn) {
    qrScanBtn.addEventListener('click', function() {
        alert('QR Scan feature coming soon! This button will activate the camera to scan QR codes.');
    });
}
