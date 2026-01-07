window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// const page = document.querySelector(".page-content");
// const footerHeight = 300;

// window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY;

//     if (scrollY <= footerHeight) {
//         page.style.transform = `translateY(-${scrollY}px)`;
//     } else {
//         page.style.transform = `translateY(-${footerHeight}px)`;
//     }
// });