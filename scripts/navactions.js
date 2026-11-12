const navactions = document.querySelectorAll(".nav-actions a");

console.log("navactions:", navactions);


navactions.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const page = this.dataset.page;

        console.log("Selected action:", page);

        if (page === "search") {
            window.location.href = "/index.html#search";
        }

    });

});