const SITE_HEADER = `
<header class="menu">
    <nav aria-label="Main menu">
        <a class="menu_brand" href="home.html">
            <img src="images/Logo.jpg" alt="">
            <span>Craving Recipes</span>
        </a>

        <button class="menu_toggle" id="menuToggle" type="button"
                aria-label="Open menu" aria-expanded="false" aria-controls="menuLinks">☰</button>

        <div class="menu_links" id="menuLinks">
            <a class="menu-link" href="home.html">Home</a>
            <a class="menu-link" href="category.html?type=all">Recipes</a>
            <a class="menu-link" href="home.html#cuisines">Cuisines</a>
            <a class="menu-link" href="about.html">About Us</a>
            <a class="menu-link" href="saved.html">Saved <span class="saved_count" id="savedCount"></span></a>
            <input type="text" id="searchInput" placeholder="Search recipes 🔍" aria-label="Search recipes">
            <div class="menu_auth" id="menuAuth"></div>
        </div>
    </nav>
</header>`;

const SITE_FOOTER = `
<footer class="site_footer">
    <div class="footer_inner">
        <div class="footer_brand">
            <h3>Craving Recipes</h3>
            <p>Home-cooked dishes, from Khmer classics to favorites around the world.</p>
        </div>

        <nav class="footer_col" aria-label="Recipes">
            <h4>Recipes</h4>
            <ul>
                <li><a href="category.html?type=breakfast">Breakfast</a></li>
                <li><a href="category.html?type=lunch">Lunch</a></li>
                <li><a href="category.html?type=dinner">Dinner</a></li>
                <li><a href="category.html?type=dessert">Dessert</a></li>
            </ul>
        </nav>

        <nav class="footer_col" aria-label="Cuisines">
            <h4>Cuisines</h4>
            <ul>
                <li><a href="category.html?type=khmer">Khmer</a></li>
                <li><a href="category.html?type=chinese">Chinese</a></li>
                <li><a href="category.html?type=korean">Korean</a></li>
                <li><a href="category.html?type=japanese">Japanese</a></li>
                <li><a href="category.html?type=italian">Italian</a></li>
            </ul>
        </nav>

        <nav class="footer_col" aria-label="Site">
            <h4>Site</h4>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>

    <div class="footer_bottom">
        <p>&copy; 2026 Craving Recipes. All rights reserved.</p>
    </div>
</footer>`;

function initMenu() {
    const toggle = document.getElementById("menuToggle");
    const links = document.getElementById("menuLinks");
    if (!toggle || !links) return;

    // Highlight the link for the page you are on
    const here = location.pathname.split("/").pop();
    links.querySelectorAll(".menu-link").forEach(link => {
        const href = link.getAttribute("href");
        if (!href.includes("#") && href.split("?")[0] === here) {
            link.classList.add("active");
        }
    });

    function setOpen(open) {
        links.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        toggle.textContent = open ? "✕" : "☰";
    }

    toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
    links.querySelectorAll(".menu-link").forEach(l => l.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
    document.addEventListener("click", e => { if (!e.target.closest("header.menu")) setOpen(false); });
    window.matchMedia("(max-width: 700px)").addEventListener("change", () => setOpen(false));
}

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");
    if (header) header.innerHTML = SITE_HEADER;
    if (footer) footer.innerHTML = SITE_FOOTER;

    initMenu();
    if (typeof updateAuthMenu === "function") updateAuthMenu();
    if (typeof updateSavedCount === "function") updateSavedCount();

    // Search: press Enter in the search box
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        const params = new URLSearchParams(location.search);
        if (location.pathname.endsWith("search.html")) searchInput.value = params.get("q") || "";

        searchInput.addEventListener("keydown", function (event) {
            if (event.key !== "Enter") return;
            const query = searchInput.value.trim();
            if (query === "") return;
            window.location.href = "search.html?q=" + encodeURIComponent(query);
        });
    }
});