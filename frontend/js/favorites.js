// Each account has its own saved list
function savedKey() {
    const user = typeof getUser === "function" ? getUser() : null;
    return user ? "cravingSaved:" + user.email : null;
}

function getSaved() {
    const key = savedKey();
    if (!key) return [];
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
        return [];
    }
}

function setSaved(ids) {
    const key = savedKey();
    if (!key) return;
    try {
        localStorage.setItem(key, JSON.stringify(ids));
    } catch (e) {}
}

function isSaved(id) {
    return getSaved().includes(Number(id));
}

// Adds or removes a recipe. Returns true if it is now saved.
function toggleSaved(id) {
    id = Number(id);
    const ids = getSaved();
    const index = ids.indexOf(id);

    if (index === -1) ids.push(id);
    else ids.splice(index, 1);

    setSaved(ids);
    return index === -1;
}

// Sends a logged-out visitor to the login page, then back here
function goToLogin(pendingId) {
    try {
        sessionStorage.setItem("cravingPendingSave", String(pendingId));
    } catch (e) {}
    const here = location.pathname.split("/").pop() + location.search;
    window.location.href = "login.html?next=" + encodeURIComponent(here);
}

// After logging in, finish the save the visitor tried to make
function applyPendingSave() {
    let pending = null;
    try {
        pending = sessionStorage.getItem("cravingPendingSave");
    } catch (e) {}

    if (!pending || typeof getUser !== "function" || !getUser()) return;

    try {
        sessionStorage.removeItem("cravingPendingSave");
    } catch (e) {}

    if (!isSaved(pending)) toggleSaved(pending);
}

// Updates how one button looks (heart, color, label)
function applySavedState(btn, saved) {
    btn.classList.toggle("saved", saved);
    btn.setAttribute("aria-pressed", String(saved));
    btn.setAttribute("aria-label", saved ? "Remove from saved" : "Save recipe");

    const heart = btn.querySelector(".heart");
    if (heart) heart.textContent = saved ? "♥" : "♡";

    const label = btn.querySelector(".save_label");
    if (label) label.textContent = saved ? "Saved" : "Save recipe";
}

// withLabel = true gives the larger "Save recipe" button used on the recipe page
function saveButtonHTML(id, withLabel) {
    const saved = isSaved(id);
    return `
    <button class="save_btn${withLabel ? " with_label" : ""}${saved ? " saved" : ""}"
            type="button" data-id="${id}" aria-pressed="${saved}"
            aria-label="${saved ? "Remove from saved" : "Save recipe"}">
        <span class="heart" aria-hidden="true">${saved ? "♥" : "♡"}</span>${withLabel ? `<span class="save_label">${saved ? "Saved" : "Save recipe"}</span>` : ""}
    </button>`;
}

// Makes hand-written buttons (like the ones in home.html) show the right state
function syncSaveButtons() {
    document.querySelectorAll(".save_btn").forEach(btn => {
        applySavedState(btn, isSaved(btn.dataset.id));
    });
}

// The number badge next to "Saved" in the menu
function updateSavedCount() {
    const badge = document.getElementById("savedCount");
    if (!badge) return;
    const n = getSaved().length;
    badge.textContent = n > 0 ? n : "";
}

// One click listener handles every save button on the page
document.addEventListener("click", function (event) {
    const btn = event.target.closest(".save_btn");
    if (!btn) return;

    event.preventDefault();

    // Not logged in: go to the login page first
    if (typeof getUser !== "function" || !getUser()) {
        goToLogin(btn.dataset.id);
        return;
    }

    applySavedState(btn, toggleSaved(btn.dataset.id));
    updateSavedCount();

    // On the Saved page, un-saving removes the card right away
    if (typeof renderSaved === "function" && document.getElementById("savedGrid")) {
        renderSaved();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    applyPendingSave();
    syncSaveButtons();
    updateSavedCount();
});