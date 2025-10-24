(function () {
    const track = document.getElementById('habilidades-track');
    if (!track) return;
    const container = track.parentElement;
    const items = Array.from(track.children);
    let index = 0;
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 1000; // tempo em ms

    function getItemWidth() {
        return items[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap) || 0);
    }

    function visibleCount() {
        return Math.max(1, Math.floor(container.getBoundingClientRect().width / getItemWidth()));
    }

    function update() {
        const shift = index * getItemWidth();
        track.style.transform = `translateX(${-shift}px)`;
        // sem botões para habilitar/desabilitar
    }

    function goNext() {
        const maxIndex = Math.max(0, items.length - visibleCount());
        index = index >= maxIndex ? 0 : index + 1; // wrap-around (infinito)
        update();
    }

    function startAutoplay() {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (autoplayTimer) return;
        autoplayTimer = setInterval(goNext, AUTOPLAY_INTERVAL);
    }

    function stopAutoplay() {
        if (!autoplayTimer) return;
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }

    // opcional: pausar ao interagir (mouse/teclado de foco)
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
    container.addEventListener('focusin', stopAutoplay);
    container.addEventListener('focusout', startAutoplay);

    // inicializa
    track.style.transition = 'transform 300ms ease';
    update();
    startAutoplay();
})();
