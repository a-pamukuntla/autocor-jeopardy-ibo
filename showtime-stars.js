/* Shared starfield builder — call buildStarfield() once after #starfield exists. */
(function () {
    function buildStarfield(count) {
        var sf = document.getElementById('starfield');
        if (!sf) return;
        sf.innerHTML = '';
        var n = count || 70;
        var frag = document.createDocumentFragment();
        for (var i = 0; i < n; i++) {
            var s = document.createElement('div');
            s.className = 'star';
            var size = Math.random() < 0.85 ? (1 + Math.random() * 1.5) : (2 + Math.random() * 2);
            s.style.width = size + 'px';
            s.style.height = size + 'px';
            s.style.left = (Math.random() * 100) + '%';
            s.style.top = (Math.random() * 100) + '%';
            s.style.setProperty('--dur', (3 + Math.random() * 5) + 's');
            s.style.setProperty('--delay', (Math.random() * 5) + 's');
            s.style.setProperty('--peak', (0.4 + Math.random() * 0.5).toString());
            frag.appendChild(s);
        }
        sf.appendChild(frag);
    }
    window.buildStarfield = buildStarfield;
})();
