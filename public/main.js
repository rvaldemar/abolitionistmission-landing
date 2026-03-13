// Navbar scroll
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
});
menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        menu.classList.remove('open');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
        var t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
});

// Reveal on scroll
var els = document.querySelectorAll('.section-title, .divider, .prose p, .pillar, .event-card, .form, .footer-top');
els.forEach(function (el) { el.classList.add('reveal'); });
var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
}, { threshold: 0.12 });
els.forEach(function (el) { obs.observe(el); });

// Form submit
var form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button');
    var orig = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'A enviar...';

    var fd = new FormData(form);
    var data = {};
    fd.forEach(function (v, k) { data[k] = v; });

    fetch('/api/inscricao', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(function (r) {
        if (r.ok) {
            form.innerHTML = '<div style="text-align:center;padding:40px 0"><h3 style="color:var(--gold);margin-bottom:12px;font-size:1.3rem">Inscrição enviada com sucesso!</h3><p style="color:#888;font-weight:300">Bem-vindo ao movimento abolicionista.</p></div>';
        } else {
            btn.disabled = false; btn.textContent = orig;
            alert('Erro ao enviar. Tenta novamente.');
        }
    }).catch(function () {
        btn.disabled = false; btn.textContent = orig;
        alert('Erro ao enviar. Tenta novamente.');
    });
});
