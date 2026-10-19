// Ratings still run in demo mode until step 4
const USE_BACKEND = false;

async function postJSON(url, body) {
    let res;
    try {
        res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
    } catch (e) {
        throw new Error("Could not reach the server. Is it running?");
    }

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
    return data;
}

async function sendRating(recipeId, stars, comment) {
    if (!USE_BACKEND) {
        console.log("Rating (not saved yet):", { recipeId, stars, comment });
        return { ok: true };
    }
    return postJSON("/api/ratings", { recipeId, stars, comment });
}

// ---------- Accounts ----------
function signupUser(name, email, password) {
    return postJSON("/api/auth/signup", { name, email, password });
}

function loginUser(email, password) {
    return postJSON("/api/auth/login", { email, password });
}