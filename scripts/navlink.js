const navlinks = document.querySelectorAll(".nav-links a");

const content = document.getElementById("content");

navlinks.forEach(function (link) {
    console.log(link.textContent);
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const page = this.dataset.page;
        console.log(page);
        if (page === "contact") {
            window.location.href = "/pages/contact.html";
        } else if (page === "home") {
            window.location.href = "/pages/home.html";
        } else if (page === "about") {
            window.location.href = "/pages/about.html";
        } else if (page === "categories") {
            window.location.href = "/pages/categories.html";
        }
    });
});

