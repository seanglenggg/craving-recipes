const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./db/connection");
const auth = require("./auth");

const app = express();
app.set("trust proxy", 1);   // the host puts a proxy in front of your app
app.use(express.json({ limit: "10kb" }));

// Serve your website files
app.use(express.static(path.join(__dirname, "../frontend")));

// Everything under /api knows who is logged in
app.use("/api", cookieParser(), auth.loadUser);
app.use("/api/auth", auth.router);

// Turn a database row back into the shape your frontend expects
function toRecipe(row) {
    return {
        ...row,
        ingredients: JSON.parse(row.ingredients),
        steps: JSON.parse(row.steps)
    };
}

// GET /api/recipes              all recipes
// GET /api/recipes?type=khmer   by cuisine or category
// GET /api/recipes?q=curry      search
app.get("/api/recipes", (req, res) => {
    const type = (req.query.type || "").toLowerCase();
    const q = (req.query.q || "").trim().toLowerCase();

    let rows = db.prepare("SELECT * FROM recipes ORDER BY id").all();

    if (type && type !== "all") {
        rows = rows.filter(r => r.category === type || r.cuisine === type);
    }
    if (q) {
        rows = rows.filter(r =>
            (r.title + " " + r.description + " " + r.category + " " + r.cuisine)
                .toLowerCase().includes(q)
        );
    }
    res.json(rows.map(toRecipe));
});

// GET /api/recipes/2
app.get("/api/recipes/:id", (req, res) => {
    const row = db.prepare("SELECT * FROM recipes WHERE id = ?").get(Number(req.params.id));
    if (!row) return res.status(404).json({ error: "Recipe not found" });
    res.json(toRecipe(row));
});

// Visitors who open the bare address land on your home page
app.get("/", (req, res) => "/html/home.html";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on port " + PORT));
