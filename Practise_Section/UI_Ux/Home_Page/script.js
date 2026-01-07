window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const worldsSlider = document.getElementById("worldsSlider");

// DATA
const worlds = [{
        title: "Yellowstone",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
        title: "Madison",
        image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"
    },
    {
        title: "Big Sky",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
        title: "Bakers Bay",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
        title: "Driftwood",
        image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9"
    }
];

// RENDER SLIDES (twice for infinite effect)
function renderSlides() {
    [...worlds, ...worlds].forEach(world => {
        const card = document.createElement("div");
        card.className = "world-card";

        card.innerHTML = `
            <img src="${world.image}" alt="">
            <h4>${world.title}</h4>
        `;

        worldsSlider.appendChild(card);
    });
}

renderSlides();

// AUTO SLIDE ENGINE

const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9",
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"
];

let currentIndex = 0;

const imgEl = document.getElementById("cardImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// initial image
imgEl.src = images[currentIndex];

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgEl.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;
    imgEl.src = images[currentIndex];
});