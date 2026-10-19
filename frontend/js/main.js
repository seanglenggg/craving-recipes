    // ----- Cuisine row: Back / Next buttons -----
    const row = document.getElementById("cuisineRow");
    const prev = document.getElementById("cuisinePrev");
    const next = document.getElementById("cuisineNext");

    if (row && prev && next) {
        function step() {
            return row.clientWidth * 0.7;
        }

        function update() {
            prev.disabled = row.scrollLeft <= 0;
            next.disabled = row.scrollLeft + row.clientWidth >= row.scrollWidth - 1;
        }

        prev.addEventListener("click", () => row.scrollTo({ left: row.scrollLeft - step(), behavior: "smooth" }));
        next.addEventListener("click", () => row.scrollTo({ left: row.scrollLeft + step(), behavior: "smooth" }));

        row.addEventListener("scroll", update);
        window.addEventListener("resize", update);
        update();
    }
;