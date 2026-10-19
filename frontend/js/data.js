// Loads recipes from the server and replaces the ones in recipes.js.
// If the server is not running, recipes.js stays as a fallback.
const recipesReady = (async function () {
    try {
        const res = await fetch("/api/recipes");
        if (!res.ok) throw new Error("Bad response");

        const list = await res.json();
        if (!Array.isArray(list) || list.length === 0) throw new Error("No recipes");

        RECIPES.length = 0;
        RECIPES.push(...list);
    } catch (e) {
        console.warn("API not available, using recipes.js");
    }
})();

// Runs a function once the recipes AND the page are both ready
function whenReady(fn) {
    recipesReady.then(function () {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", fn);
        } else {
            fn();
        }
    });
}