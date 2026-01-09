let allUsers = [];

async function github() {
    const count = document.getElementById('ready');
    try {
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) {
            throw new Error("Data is not Present");
        }
        const data = await response.json();
        allUsers = data;
        displayUsers(allUsers);
    } catch (error) {
        console.log(error);
    }
}

function displayUsers(users) {
    const parent = document.getElementById("first");
    parent.innerHTML = '';
    if (users.length === 0) {
        const element = document.createElement('h1');
        element.textContent = "No Users Found...!"
        parent.append(element);
        return;
    }
    for (let user of users) {
        const element = document.createElement("div");
        element.classList.add("user");
        const image = document.createElement("img")
        image.src = user.avatar_url;

        const username = document.createElement('h2');
        username.textContent = user.login;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile";

        element.append(image, username, anchor);
        parent.append(element);
    }
}

function searchUsers() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        displayUsers(allUsers);
    } else {
        const filteredUsers = allUsers.filter(user =>
            user.login.toLowerCase().includes(searchTerm)
        );
        displayUsers(filteredUsers);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    github();
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener('input', searchUsers);
});