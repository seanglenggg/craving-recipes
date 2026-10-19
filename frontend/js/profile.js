whenReady(function () {
    if (!document.getElementById("profileContent")) return;

    const $ = id => document.getElementById(id);

    function savedRecipes() {
        return getSaved()
            .slice()
            .reverse()
            .map(id => RECIPES.find(r => r.id === id))
            .filter(Boolean);
    }

    function render() {
        const user = getUser();
        $("profileLoggedOut").hidden = !!user;
        $("profileContent").hidden = !user;
        if (!user) return;

        $("profileAvatar").textContent = initials(user.name);
        $("profileName").textContent = user.name;
        $("profileEmail").textContent = user.email;
        $("emailShown").value = user.email;
        $("profileSince").textContent = user.joined
            ? "Member since " + new Date(user.joined).toLocaleDateString(undefined, { month: "long", year: "numeric" })
            : "";

        // Don't overwrite the name while it is being edited
        if (document.activeElement !== $("nameInput")) $("nameInput").value = user.name;

        // Stats
        const list = savedRecipes();
        const cuisines = list.map(r => r.cuisine).filter(Boolean);
        const counts = {};
        cuisines.forEach(c => { counts[c] = (counts[c] || 0) + 1; });
        const top = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

        $("statSaved").textContent = list.length;
        $("statCuisines").textContent = new Set(cuisines).size;
        $("statTop").textContent = top ? top.charAt(0).toUpperCase() + top.slice(1) : "—";

        // Latest four saved recipes
        $("profileSaved").innerHTML = list.slice(0, 4).map(cardHTML).join("");
        $("profileEmpty").hidden = list.length > 0;
        $("viewAllSaved").hidden = list.length === 0;
    }

    // Change name
       $("nameForm").addEventListener("submit", async function (event) {
        event.preventDefault();
        const message = $("nameMessage");
        const name = $("nameInput").value.trim();

        if (name.length < 2) {
            message.textContent = "Please enter your name.";
            message.className = "auth_message error";
            return;
        }

        try {
            await updateUserName(name);
            updateAuthMenu();
            render();
            message.textContent = "Your changes were saved.";
            message.className = "auth_message";
        } catch (error) {
            message.textContent = error.message;
            message.className = "auth_message error";
        }
    });

    // Clear saved recipes
    $("clearSaved").addEventListener("click", function () {
        if (!confirm("Remove all your saved recipes?")) return;
        setSaved([]);
        updateSavedCount();
        render();
    });

    $("logoutProfile").addEventListener("click", logout);

    // A heart tapped in the preview updates the stats and the list
    document.addEventListener("click", function (event) {
        if (event.target.closest(".save_btn")) render();
    });

    document.addEventListener("authchange", render);
    render();
});