/* ═══════════════════════════════════════════════════════════════════
   4DK · Shared components
   Injects navigation + footer into every page from one source of truth.
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  // Determine current page from filename, default to 'index'
  const path = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
  const page = path.replace('.html', '') || 'index';

  // ── NAVIGATION ──────────────────────────────────────────────────
  const navLinks = [
    { href: 'index.html',      label: 'Home',       key: 'index' },
    { href: 'pricing.html',    label: 'Pricing',    key: 'pricing' },
    { href: 'gallery.html',    label: 'Gallery',    key: 'gallery' },
    { href: 'locations.html',  label: 'Locations',  key: 'locations' },
    { href: 'feedback.html',   label: 'Feedback',   key: 'feedback' },
  ];

  const isCurrent = key => key === page ? ' class="is-current"' : '';

  const navHTML = `
    <nav class="nav" id="siteNav">
      <div class="nav__inner">
        <a href="index.html" class="nav__brand">
          <img src="images/4dkminilogonobg.png" alt="4DK logo">
        </a>
        <ul class="nav__links">
          ${navLinks.map(l => `<li><a href="${l.href}"${isCurrent(l.key)}>${l.label}</a></li>`).join('')}
        </ul>
        <a href="commission.html" class="nav__cta">Commission</a>
        <button class="nav__toggle" aria-label="Toggle menu" id="navToggle">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;

  // ── FOOTER ──────────────────────────────────────────────────────
  const footerHTML = `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <a href="index.html" class="footer__logo">
            <img src="images/4dkminilogonobg.png" alt="4DK logo">
          </a>
          <p class="footer__tagline">
            4 Dudes and a Keyboard — premium mechanical keyboard modding,
            crafted in the Philippines since 2023.
          </p>
        </div>

        <div class="footer__col">
          <h4>Explore</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="commission.html">Commission</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <h4>Branches</h4>
          <ul>
            <li>Manila / Makati</li>
            <li>Pasig</li>
            <li>Marikina</li>
            <li>Cabanatuan</li>
          </ul>
        </div>

        <div class="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+639950970464">+63 995 097 0464</a></li>
            <li><a href="https://www.facebook.com/4DudesKeyboard" target="_blank" rel="noopener">facebook.com/4DudesKeyboard</a></li>
            <li><a href="feedback.html">Leave Feedback</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© 2026 · 4 Dudes and a Keyboard</span>
        <span>Crafted in the Philippines</span>
      </div>
    </footer>
  `;

  // ── INJECT ──────────────────────────────────────────────────────
  function inject() {
    const navMount = document.getElementById('nav-mount');
    const footerMount = document.getElementById('footer-mount');

    if (navMount) navMount.outerHTML = navHTML;
    if (footerMount) footerMount.outerHTML = footerHTML;

    // Mobile nav toggle (re-query after injection)
    const toggle = document.getElementById('navToggle');
    const navEl = document.getElementById('siteNav');
    if (toggle && navEl) {
      toggle.addEventListener('click', () => navEl.classList.toggle('is-open'));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
