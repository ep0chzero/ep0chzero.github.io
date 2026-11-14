// Mobile navigation toggle
(function () {
    var toggle = document.getElementById('nav-toggle');
    var links  = document.getElementById('nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        links.classList.toggle('open', !open);
        document.body.classList.toggle('nav-open', !open);
    });

    links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            toggle.setAttribute('aria-expanded', 'false');
            links.classList.remove('open');
            document.body.classList.remove('nav-open');
        });
    });
})();

// Dark / light theme toggle
(function () {
    var btn  = document.getElementById('theme-toggle');
    var html = document.documentElement;
    if (!btn) return;

    function label(theme) {
        btn.setAttribute('aria-label',
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    // Set initial label (theme already applied by inline <head> script)
    label(html.getAttribute('data-theme'));

    btn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        label(next);
    });
})();
