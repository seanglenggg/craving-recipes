document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ratingForm");
    if (!form) return;

    const message = document.getElementById("ratingMessage");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const chosen = document.querySelector('input[name="rating"]:checked');
        const comment = document.getElementById("ratingComment").value.trim();

        if (!chosen) {
            message.textContent = "Please choose a star rating first.";
            message.classList.add("error");
            return;
        }

        try {
            await sendRating(null, Number(chosen.value), comment);
            message.classList.remove("error");
            message.textContent = "Thank you! You rated us " + chosen.value + " out of 5.";
            form.reset();
        } catch (error) {
            message.classList.add("error");
            message.textContent = "Sorry, we could not save your rating. Please try again.";
        }
    });
});