/* ==========================================
   NOVA VIERA HOTSPOT PORTAL
   Premium Script
========================================== */

document.addEventListener('DOMContentLoaded', function () {

    initClock();
    initBackgroundSlider();
    initBandwidthAnimation();
    initCounters();
    initConnectionTimer();
    initGreeting();

});

/* ==========================================
   REALTIME CLOCK
========================================== */

function initClock() {

    const clock = document.getElementById('clock');

    if (!clock) return;

    function updateClock() {

        const now = new Date();

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const date = now.toLocaleDateString(
            'id-ID',
            options
        );

        const time = now.toLocaleTimeString(
            'id-ID'
        );

        clock.innerHTML =
            date + ' • ' + time;

    }

    updateClock();

    setInterval(
        updateClock,
        1000
    );

}

/* ==========================================
   GREETING
========================================== */

function initGreeting() {

    const target =
        document.getElementById('greeting');

    if (!target) return;

    const hour =
        new Date().getHours();

    let text = '';

    if (hour < 11) {
        text = 'Selamat Pagi';
    }
    else if (hour < 15) {
        text = 'Selamat Siang';
    }
    else if (hour < 18) {
        text = 'Selamat Sore';
    }
    else {
        text = 'Selamat Malam';
    }

    target.innerHTML = text;

}

/* ==========================================
   BACKGROUND SLIDER
========================================== */

function initBackgroundSlider() {

    const slides =
        document.querySelectorAll('.slide');

    if (!slides.length) return;

    let current = 0;

    setInterval(function () {

        slides[current]
            .classList
            .remove('active');

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current]
            .classList
            .add('active');

    }, 5000);

}

/* ==========================================
   PROGRESS BAR
========================================== */

function initBandwidthAnimation() {

    const bars =
        document.querySelectorAll('.progress-bar');

    if (!bars.length) return;

    bars.forEach(function (bar) {

        const value =
            bar.dataset.value || 75;

        setTimeout(function () {

            bar.style.width =
                value + '%';

        }, 500);

    });

}

/* ==========================================
   COUNTER ANIMATION
========================================== */

function initCounters() {

    const counters =
        document.querySelectorAll(
            '[data-counter]'
        );

    if (!counters.length) return;

    counters.forEach(function (counter) {

        const target =
            parseInt(
                counter.dataset.counter
            );

        let current = 0;

        const increment =
            Math.ceil(target / 60);

        const timer =
            setInterval(function () {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.innerHTML =
                    current;

            }, 20);

    });

}

/* ==========================================
   CONNECTION TIMER
========================================== */

function initConnectionTimer() {

    const timerElement =
        document.getElementById(
            'connection-timer'
        );

    if (!timerElement) return;

    let seconds = 0;

    setInterval(function () {

        seconds++;

        const hrs =
            Math.floor(seconds / 3600);

        const mins =
            Math.floor(
                (seconds % 3600) / 60
            );

        const secs =
            seconds % 60;

        timerElement.innerHTML =
            pad(hrs) +
            ':' +
            pad(mins) +
            ':' +
            pad(secs);

    }, 1000);

}

function pad(value) {

    return value
        .toString()
        .padStart(2, '0');

}

/* ==========================================
   SMOOTH APPEAR
========================================== */

window.addEventListener(
    'load',
    function () {

        document.body.classList.add(
            'loaded'
        );

    }
);

/* ==========================================
   CARD HOVER EFFECT
========================================== */

document.addEventListener(
    'mousemove',
    function (e) {

        const cards =
            document.querySelectorAll(
                '.login-card,.status-card,.logout-card'
            );

        cards.forEach(function (card) {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left;

            const y =
                e.clientY -
                rect.top;

            card.style.setProperty(
                '--mouse-x',
                x + 'px'
            );

            card.style.setProperty(
                '--mouse-y',
                y + 'px'
            );

        });

    }
);

/* ==========================================
   REFRESH STATUS
========================================== */

function refreshStatus() {

    const uptime =
        document.getElementById(
            'uptime-refresh'
        );

    if (!uptime) return;

    uptime.classList.add(
        'refreshing'
    );

    setTimeout(function () {

        uptime.classList.remove(
            'refreshing'
        );

    }, 1000);

}

/* ==========================================
   AUTO REFRESH STATUS PAGE
========================================== */

if (
    document.body.classList.contains(
        'status-page'
    )
) {

    setInterval(
        refreshStatus,
        30000
    );

}

/* ==========================================
   NETWORK SPEED DEMO
========================================== */

function simulateSpeed() {

    const down =
        document.getElementById(
            'download-speed'
        );

    const up =
        document.getElementById(
            'upload-speed'
        );

    if (!down || !up) return;

    setInterval(function () {

        const download =
            (
                Math.random() * 100
            ).toFixed(1);

        const upload =
            (
                Math.random() * 50
            ).toFixed(1);

        down.innerHTML =
            download + ' Mbps';

        up.innerHTML =
            upload + ' Mbps';

    }, 3000);

}

simulateSpeed();

/* ==========================================
   PACKAGE HOVER EFFECT
========================================== */

const packages =
    document.querySelectorAll(
        '.package-item'
    );

packages.forEach(function (item) {

    item.addEventListener(
        'mouseenter',
        function () {

            item.style.transform =
                'translateY(-3px)';

        }
    );

    item.addEventListener(
        'mouseleave',
        function () {

            item.style.transform =
                'translateY(0)';

        }
    );

});

/* ==========================================
   END FILE
========================================== */