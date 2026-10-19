const USER_KEY = "cravingUser";

function escapeHTML(text) {
    return String(text).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

// A copy of the logged-in user, used for display. The server cookie is the real proof.
function getUser() {
    try {
        return JSON.parse(localStorage.getItem(USER_KEY));
    } catch (e) {
        return null;
    }
}

function setUser(user) {
    try {
        localStorage.setItem(USER_KEY, JSON.stringify({
            name: user.name,
            email: user.email,
            joined: user.joined || null
        }));
    } catch (e) {}
}

function clearUser() {
    try {
        localStorage.removeItem(USER_KEY);
    } catch (e) {}
}

async function updateUserName(name) {
    const res = await fetch("/api/auth/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Could not save your changes.");
    setUser(data);
}

async function logout() {
    try {
        await fetch("/api/auth/logout", { method: "POST" });
    } catch (e) {}
    clearUser();
    window.location.href = "home.html";
}

// "Sophea Chan" -> "SC"
function initials(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "?";
    const first = Array.from(parts[0])[0];
    const last = parts.length > 1 ? Array.from(parts[parts.length - 1])[0] : "";
    return (first + last).toUpperCase();
}

// Menu: "Log in" button, or profile icon + "Log out" button
function updateAuthMenu() {
    const box = document.getElementById("menuAuth");
    if (!box) return;

    const user = getUser();

    if (!user) {
        box.innerHTML = '<a class="auth_btn login" href="login.html">Log in</a>';
        return;
    }

    const here = location.pathname.split("/").pop();
    const firstName = String(user.name).trim().split(/\s+/)[0];

    box.innerHTML =
        '<a class="avatar_link' + (here === "profile.html" ? " active" : "") + '" href="profile.html"' +
        ' title="Your profile" aria-label="Your profile">' +
            '<span class="avatar" aria-hidden="true">' + escapeHTML(initials(user.name)) + '</span>' +
            '<span class="avatar_name">' + escapeHTML(firstName) + '</span>' +
        '</a>' +
        '<button type="button" class="auth_btn logout" id="logoutBtn">Log out</button>';

    document.getElementById("logoutBtn").addEventListener("click", logout);
}

// Ask the server who is really logged in, and fix the saved copy if it is out of date
const authReady = (async function () {
    try {
        const res = await fetch("/api/auth/me");
        if (res.ok) setUser(await res.json());
        else if (res.status === 401) clearUser();
    } catch (e) {}
})();

function refreshAuthUI() {
    updateAuthMenu();
    if (typeof updateSavedCount === "function") updateSavedCount();
    if (typeof syncSaveButtons === "function") syncSaveButtons();
    if (typeof renderSaved === "function" && document.getElementById("savedGrid")) renderSaved();
    document.dispatchEvent(new Event("authchange"));
}

authReady.then(function () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", refreshAuthUI);
    } else {
        refreshAuthUI();
    }
});