function cardHTML(r) {
    return `
    <article class="dish">
        <a class="dish_link" href="recipe.html?id=${r.id}">
            <div class="box1"><img src="${r.image}" alt="${r.title}" loading="lazy"></div>
        </a>
        <div class="dish_info">
            <div class="dish_text">
                <h3><a href="recipe.html?id=${r.id}">${r.title}</a></h3>
                <p>${r.description}</p>
            </div>
            ${saveButtonHTML(r.id, false)}
        </div>
    </article>`;
}

function showRecipes(list, emptyText) {
    const grid = document.getElementById("recipeGrid");
    const empty = document.getElementById("emptyMessage");
    grid.innerHTML = list.map(cardHTML).join("");
    empty.textContent = list.length === 0 ? emptyText : "";
}

// Saved page: newest saved first
function renderSaved() {
    const grid = document.getElementById("savedGrid");
    const empty = document.getElementById("savedEmpty");
    if (!grid || !empty) return;

    // Not logged in
    if (typeof getUser !== "function" || !getUser()) {
        grid.innerHTML = "";
        empty.innerHTML =
            '<p>Please log in to see your saved recipes.</p>' +
            '<a class="button" href="login.html?next=saved.html">Log in</a>';
        empty.hidden = false;
        return;
    }

    const list = getSaved()
        .slice()
        .reverse()
        .map(id => RECIPES.find(r => r.id === id))
        .filter(Boolean);

    grid.innerHTML = list.map(cardHTML).join("");
    empty.innerHTML =
        '<p>You have not saved any recipes yet. Tap the heart on a recipe to keep it here.</p>' +
        '<a class="button" href="category.html?type=all">Browse recipes</a>';
    empty.hidden = list.length > 0;
}

whenReady(function () {
    const params = new URLSearchParams(location.search);

    // ----- category.html?type=khmer -----
    const categoryTitle = document.getElementById("categoryTitle");
    if (categoryTitle) {
        const type = (params.get("type") || "all").toLowerCase();
        const name = type === "all" ? "All recipes" : type.charAt(0).toUpperCase() + type.slice(1) + " recipes";
        categoryTitle.textContent = name;
        document.title = name + " | Craving Recipes";

        const list = RECIPES.filter(r => type === "all" || r.category === type || r.cuisine === type);
        showRecipes(list, "No recipes here yet. Check back soon!");
    }

    // ----- search.html?q=soup -----
    const searchTitle = document.getElementById("searchTitle");
    if (searchTitle) {
        const q = (params.get("q") || "").trim().toLowerCase();
        searchTitle.textContent = q ? 'Results for "' + params.get("q").trim() + '"' : "Search";

        const list = RECIPES.filter(r =>
            (r.title + " " + r.description + " " + r.category + " " + r.cuisine).toLowerCase().includes(q)
        );
        showRecipes(q ? list : [], q ? "No recipes found. Try another word." : "Type something in the search box.");
    }

    // ----- saved.html -----
    if (document.getElementById("savedGrid")) {
        renderSaved();
    }

    // ----- recipe.html?id=1 -----
    const page = document.getElementById("recipePage");
    if (page) {
        const r = RECIPES.find(item => item.id === Number(params.get("id")));

        if (!r) {
            page.innerHTML = "<h1>Recipe not found</h1><p><a href='category.html?type=all'>Browse all recipes</a></p>";
            return;
        }

        const ingredients = Array.isArray(r.ingredients) ? r.ingredients : [];
        const steps = Array.isArray(r.steps) ? r.steps : [];

        document.title = r.title + " | Craving Recipes";
        page.innerHTML = `
            <img class="recipe_image" src="${r.image}" alt="${r.title}">
            <h1>${r.title}</h1>
            <p class="recipe_meta">
                <a href="category.html?type=${r.cuisine}">${r.cuisine}</a> ·
                <a href="category.html?type=${r.category}">${r.category}</a>
            </p>
            ${saveButtonHTML(r.id, true)}
            <p>${r.description}</p>
            <h2>Ingredients</h2>
            ${ingredients.length
                ? "<ul>" + ingredients.map(i => "<li>" + i + "</li>").join("") + "</ul>"
                : "<p>No ingredients listed yet.</p>"}
            <h2>Steps</h2>
            ${steps.length
                ? "<ol>" + steps.map(s => "<li>" + s + "</li>").join("") + "</ol>"
                : "<p>No steps listed yet.</p>"}`;
    }
});