// ===== Event visibility based on month =====
(function () {
    var month = new Date().getMonth() + 1; // 1-12
    var primavera = document.getElementById('evento-primavera');
    var encontro = document.getElementById('evento-encontro');
    var renovacao = document.getElementById('evento-renovacao');

    if (month >= 1 && month <= 5) {
        encontro.classList.add('hidden');
        renovacao.classList.add('hidden');
    } else if (month >= 6 && month <= 11) {
        primavera.classList.add('hidden');
        renovacao.classList.add('hidden');
    } else {
        primavera.classList.add('hidden');
        encontro.classList.add('hidden');
    }
})();

// ===== Scroll animations =====
(function () {
    var targets = document.querySelectorAll('.section-title, .missao-content p, .valor-card, .evento-card, .form, .footer-content');
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

// ===== Form submission feedback =====
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
            telefone: formData.get('telefone'),
            como_soube: formData.get('como_soube')
        };

        fetch('/api/inscricao', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) {
            if (res.ok) {
                form.innerHTML = '<div style="text-align:center;padding:40px 0;"><h3 style="color:var(--gold);margin-bottom:12px;">Obrigado!</h3><p style="color:#ccc;">A sua inscrição foi recebida. Entraremos em contacto em breve.</p></div>';
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
