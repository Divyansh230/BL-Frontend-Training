window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});