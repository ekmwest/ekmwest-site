(function () {

    // Global Prop
    window.ekmwest = window.ekmwest || {};


    // Init
    setDarkMode(isDarkMode());


    // Detect
    function isDarkMode() {
        // 1. Selected by user
        if (localStorage.getItem('dark-mode') !== null) {
            return localStorage.getItem('dark-mode') === 'true';
        }

        // 2. Browser default
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }

        // 3. Site default
        return false;
    }


    // Set
    function setDarkMode(dark) {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'false');
        }
    }


    // Toggle
    function toggleDarkMode() {
        setDarkMode(!isDarkMode());
    }


    // Export
    window.ekmwest.toggleDarkMode = toggleDarkMode;
    window.ekmwest.isDarkMode = isDarkMode;

})();
