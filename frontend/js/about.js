whenReady(function () {
    const recipes = document.getElementById("statRecipes");
    const cuisines = document.getElementById("statCuisines");
    const categories = document.getElementById("statCategories");
    if (!recipes || typeof RECIPES === "undefined") return;

    const uniqueCount = (field) =>
        new Set(RECIPES.map(r => r[field]).filter(Boolean)).size;

    recipes.textContent = RECIPES.length;
    cuisines.textContent = uniqueCount("cuisine");
    categories.textContent = uniqueCount("category");
});