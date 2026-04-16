document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        const targetPosition = destino.getBoundingClientRect().top 
        + window.pageYOffset
        - (window.innerHeight / 2)
        + (destino.offsetHeight / 2);
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;

        let startTime = null;

        function animationScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;

            const duration = 1800; // 🔥 velocidad (más alto = más lento)

            const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);

            if (timeElapsed < duration) requestAnimationFrame(animationScroll);
        }

        function easeOutCubic(t, b, c, d) {
            t /= d;
            t--;
            return c * (t * t * t + 1) + b;
        }

        requestAnimationFrame(animationScroll);
    });
});

