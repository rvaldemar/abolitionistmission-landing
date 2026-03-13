// ===== Navbar scroll effect =====
(function () {
    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
})();

// ===== Mobile hamburger menu =====
(function () {
    var hamburger = document.getElementById('nav-hamburger');
    var links = document.getElementById('nav-links');
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        links.classList.toggle('active');
    });
    // Close menu on link click
    links.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            links.classList.remove('active');
        });
    });
})();

// ===== Scroll animations =====
(function () {
    var targets = document.querySelectorAll('.section-title, .section-divider, .missao-content p, .valor-card, .evento-card, .form, .footer-content');
    targets.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(function (el) {
        observer.observe(el);
    });
})();

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Form submission =====
(function () {
    var form = document.getElementById('inscricao-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        var originalText = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'A enviar...';

        var formData = new FormData(form);
        var data = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            cidade: formData.get('cidade'),
            pais: formData.get('pais'),
            telefone: formData.get('telefone'),
            como_soube: formData.get('como_soube')
        };

        fetch('/api/inscricao', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) {
            if (res.ok) {
                form.innerHTML = '<div style="text-align:center;padding:48px 0;"><h3 style="color:var(--gold);margin-bottom:16px;font-size:1.4rem;">Obrigado!</h3><p style="color:#999;font-weight:300;line-height:1.7;">A tua inscrição foi recebida.<br>Bem-vindo ao movimento abolicionista.</p></div>';
            } else {
                btn.disabled = false;
                btn.textContent = originalText;
                alert('Ocorreu um erro. Por favor tente novamente.');
            }
        }).catch(function () {
            btn.disabled = false;
            btn.textContent = originalText;
            alert('Ocorreu um erro. Por favor tente novamente.');
        });
    });
})();
