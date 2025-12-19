const appConfig = {
    languages: ['EN', 'AZ', 'RU', 'TR'],
    currentLang: 'EN'
};

function renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'glass';
    nav.innerHTML = `
        <div class="container nav-container">
            <a href="index.html" class="logo text-gradient">ANTIGRAVITY.AI</a>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="use-cases.html">Use Cases</a>
                <a href="pricing.html">Pricing</a>
                <a href="contact.html">Contact</a>
            </div>
            <div class="nav-actions flex-center" style="gap: 15px;">
                <div class="lang-switcher" style="cursor: pointer; font-weight: 600;">
                    <span id="current-lang">EN</span> ▼
                </div>
                <a href="login.html" class="btn btn-primary" style="padding: 8px 20px; font-size: 0.9rem;">Login</a>
            </div>
        </div>
    `;
    document.body.prepend(nav);

    // Sticky Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h3 class="text-gradient" style="margin-bottom: 20px;">ANTIGRAVITY.AI</h3>
                    <p style="color: var(--text-muted);">Empowering the future of finance with Open Banking and Artificial Intelligence.</p>
                </div>
                <div>
                    <h4>Platform</h4>
                    <ul style="list-style: none; margin-top: 15px; color: var(--text-muted);">
                        <li><a href="services.html">Services</a></li>
                        <li><a href="use-cases.html">Use Cases</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul style="list-style: none; margin-top: 15px; color: var(--text-muted);">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Connect</h4>
                    <div class="social-links" style="margin-top: 15px;">
                        <a href="#">🐦</a>
                        <a href="#">💼</a>
                        <a href="#">📸</a>
                    </div>
                </div>
            </div>
            <div style="text-align: center; color: var(--text-muted); padding-top: 20px; border-top: 1px solid var(--glass-border);">
                © 2024 Antigravity AI. Hackathon Project.
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
});
