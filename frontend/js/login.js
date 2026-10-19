document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("authForm");
    if (!form) return;

    const tabLogin = document.getElementById("tabLogin");
    const tabSignup = document.getElementById("tabSignup");
    const heading = document.getElementById("authHeading");
    const sub = document.getElementById("authSub");
    const submit = document.getElementById("authSubmit");
    const message = document.getElementById("authMessage");
    const switchText = document.getElementById("authSwitch");
    const nameField = document.getElementById("nameField");
    const confirmField = document.getElementById("confirmField");
    const nameInput = document.getElementById("authName");
    const emailInput = document.getElementById("authEmail");
    const passInput = document.getElementById("authPassword");
    const confirmInput = document.getElementById("authConfirm");
    const showPw = document.getElementById("showPw");

    let mode = "login";

    function setMode(next) {
        mode = next;
        const signup = mode === "signup";

        tabLogin.classList.toggle("active", !signup);
        tabSignup.classList.toggle("active", signup);
        tabLogin.setAttribute("aria-selected", String(!signup));
        tabSignup.setAttribute("aria-selected", String(signup));

        nameField.hidden = !signup;
        confirmField.hidden = !signup;
        passInput.autocomplete = signup ? "new-password" : "current-password";

        heading.textContent = signup ? "Create your account" : "Welcome back";
        sub.textContent = signup ? "Save your favorite recipes in one place." : "Log in to see your saved recipes.";
        submit.textContent = signup ? "Create account" : "Log in";
        switchText.innerHTML = signup
            ? 'Already have an account? <a href="#" id="switchLink">Log in</a>'
            : 'New here? <a href="#" id="switchLink">Create an account</a>';

        document.getElementById("switchLink").addEventListener("click", function (e) {
            e.preventDefault();
            setMode(signup ? "login" : "signup");
        });

        message.textContent = "";
        message.className = "auth_message";
    }

    function showError(text) {
        message.textContent = text;
        message.className = "auth_message error";
    }

    tabLogin.addEventListener("click", () => setMode("login"));
    tabSignup.addEventListener("click", () => setMode("signup"));
    document.getElementById("switchToSignup").addEventListener("click", function (e) {
        e.preventDefault();
        setMode("signup");
    });

    // Show / hide password
    showPw.addEventListener("click", function () {
        const hidden = passInput.type === "password";
        passInput.type = hidden ? "text" : "password";
        confirmInput.type = hidden ? "text" : "password";
        showPw.textContent = hidden ? "Hide" : "Show";
        showPw.setAttribute("aria-label", hidden ? "Hide password" : "Show password");
    });

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim().toLowerCase();
        const password = passInput.value;

        if (mode === "signup" && name.length < 2) return showError("Please enter your name.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError("Please enter a valid email address.");
        if (password.length < 8) return showError("Your password must be at least 8 characters.");
        if (mode === "signup" && password !== confirmInput.value) return showError("The passwords do not match.");

        submit.disabled = true;
        submit.textContent = mode === "signup" ? "Creating account..." : "Logging in...";

        try {
            const user = mode === "signup"
                ? await signupUser(name, email, password)
                : await loginUser(email, password);

            setUser(user);

            // Go back to the page the visitor came from, if there is one
            const next = new URLSearchParams(location.search).get("next");
            window.location.href = next && /^[\w\-.]+\.html(\?.*)?$/.test(next) ? next : "home.html";
        } catch (error) {
            showError(error.message || "Something went wrong. Please try again.");
            submit.disabled = false;
            submit.textContent = mode === "signup" ? "Create account" : "Log in";
        }
    });

    // login.html?mode=signup opens on the sign-up tab
    if (new URLSearchParams(location.search).get("mode") === "signup") setMode("signup");
    else setMode("login");
});