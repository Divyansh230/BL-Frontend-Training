window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const images = [{
        title: "MONCAYO GOLF & OCEAN CLUB",
        location: "Puerto Rico",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
        title: "TERRITORY 1889",
        location: "Montana",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
        title: "TENUTA TOSCANA",
        location: "Italy",
        img: "https://www.datocms-assets.com/128889/1726232913-paesaggio_tappainer_2022-copy.jpeg?fit=max&h=350&w=500"
    },
    {
        title: "MOHALA",
        location: "Hawaii",
        img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
        title: "CRAZY MOUNTAIN RANCH",
        location: "Montana",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
        title: "MAVERICK GOLF & RANCH",
        location: "Texas",
        img: "https://www.datocms-assets.com/128889/1721142462-15507_large-1500-x-1500.jpg?fit=max&h=350&w=500"
    }
];

// repeat automatically to make 38
while (images.length < 38) {
    images.push(...images.slice(0, 38 - images.length));
}

const gallery = document.getElementById("gallery");

images.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-card";

    card.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <div class="overlay">
      <h4>${item.title}</h4>
      <p>${item.location}</p>
    </div>
  `;

    gallery.appendChild(card);
});