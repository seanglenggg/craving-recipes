const fs = require("fs");
const path = require("path");
const vm = require("vm");
const db = require("./connection");

// Load the RECIPES list from the frontend file
const code = fs.readFileSync(path.join(__dirname, "../../frontend/js/recipes.js"), "utf8");
const sandbox = {};
vm.runInNewContext(code + "\nthis.RECIPES = RECIPES;", sandbox);
const recipes = sandbox.RECIPES;

const insert = db.prepare(`
    INSERT INTO recipes (id, title, description, image, category, cuisine, ingredients, steps)
    VALUES (@id, @title, @description, @image, @category, @cuisine, @ingredients, @steps)
    ON CONFLICT(id) DO UPDATE SET
        title = excluded.title, description = excluded.description, image = excluded.image,
        category = excluded.category, cuisine = excluded.cuisine,
        ingredients = excluded.ingredients, steps = excluded.steps
`);

const seedAll = db.transaction(list => {
    for (const r of list) {
        insert.run({
            id: r.id,
            title: r.title,
            description: r.description || "",
            image: r.image || "",
            category: r.category || "",
            cuisine: r.cuisine || "",
            ingredients: JSON.stringify(r.ingredients || []),
            steps: JSON.stringify(r.steps || [])
        });
    }
});

seedAll(recipes);
console.log("Seeded " + recipes.length + " recipes.");
