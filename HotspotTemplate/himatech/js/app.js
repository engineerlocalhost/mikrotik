/* =====================================================
   HIMATECH NET HOTSPOT PORTAL
   Premium ISP Theme
===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {

        menuToggle.addEventListener('click', () => {

            menu.classList.toggle('active');

        });

        document.querySelectorAll('#menu a').forEach(link => {

            link.addEventListener('click', () => {

                menu.classList.remove('active');

            });

        });

    }

    /* ==========================================
       DARK / LIGHT MODE
    ========================================== */

    const themeToggle =
        document.getElementById('themeToggle');

    if (localStorage.getItem('theme') === 'light') {

        document.body.classList.add('light');

        if (themeToggle)
            themeToggle.innerHTML = '☀️';

    }

    if (themeToggle) {

        themeToggle.addEventListener('click', () => {

            document.body.classList.toggle('light');

            const isLight =
                document.body.classList.contains('light');

            localStorage.setItem(
                'theme',
                isLight ? 'light' : 'dark'
            );

            themeToggle.innerHTML =
                isLight ? '☀️' : '🌙';

        });

    }

    /* ==========================================
       LAST USERNAME
    ========================================== */

    const username =
        document.getElementById('username');

    if (username) {

        const lastUser =
            localStorage.getItem('lastUsername');

        if (lastUser) {

            username.value = lastUser;

        }

    }

    const loginForm =
        document.forms['login'];

    if (loginForm) {

        loginForm.addEventListener('submit', () => {

            if (username) {

                localStorage.setItem(
                    'lastUsername',
                    username.value
                );

            }

        });

    }

    /* ==========================================
       LOGIN LOADING BUTTON
    ========================================== */

    const loginButton =
        document.querySelector('.btn-login');

    if (loginForm && loginButton) {

        loginForm.addEventListener('submit', () => {

            loginButton.disabled = true;

            loginButton.innerHTML =
                'Menghubungkan...';

        });

    }

    /* ==========================================
       QRIS POPUP
    ========================================== */

    const qrisBtn =
        document.getElementById('qrisBtn');

    const qrisPopup =
        document.getElementById('qrisPopup');

    const closeQris =
        document.getElementById('closeQris');

    if (qrisBtn && qrisPopup) {

        qrisBtn.addEventListener('click', () => {

            qrisPopup.classList.add('active');

        });

    }

    if (closeQris && qrisPopup) {

        closeQris.addEventListener('click', () => {

            qrisPopup.classList.remove('active');

        });

    }

    if (qrisPopup) {

        qrisPopup.addEventListener('click', (e) => {

            if (e.target === qrisPopup) {

                qrisPopup.classList.remove('active');

            }

        });

    }

    /* ==========================================
       PARTICLES NETWORK EFFECT
    ========================================== */

    const particles =
        document.getElementById('particles');

    if (particles) {

        for (let i = 0; i < 60; i++) {

            const dot =
                document.createElement('div');

            dot.classList.add('dot');

            dot.style.left =
                Math.random() * 100 + '%';

            dot.style.animationDuration =
                (8 + Math.random() * 12) + 's';

            dot.style.animationDelay =
                (Math.random() * 8) + 's';

            dot.style.opacity =
                Math.random();

            particles.appendChild(dot);

        }

    }

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(
        '.package, .stat, .login-card, .hero-info'
    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('show');

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(el => {

        el.classList.add('reveal');

        observer.observe(el);

    });

    /* ==========================================
       YEAR AUTO FOOTER
    ========================================== */

    const year =
        document.getElementById('year');

    if (year) {

        year.innerHTML =
            new Date().getFullYear();

    }

});