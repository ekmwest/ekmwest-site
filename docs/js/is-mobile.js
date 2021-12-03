// Include without defer, async, or type="module". This is
// to make sure css class is set before first render.

(function () {

    const MOBILE_WIDTH = 768;

    var query = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`);

    setScreenMode();

    query.addEventListener('change', setScreenMode);

    function setScreenMode() {
        if (query.matches) {
            window.isMobile = true;
            document.documentElement.classList.add('is-mobile');
        } else {
            window.isMobile = false;
            document.documentElement.classList.remove('is-mobile');
        }
    }
})();
