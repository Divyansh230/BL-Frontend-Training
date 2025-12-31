// // handleClick = () => {
// //     const element = document.getElementById("first");
// //     element.style.color = "red";
// //     element.textContent = "You clicked me!";
// // }

// // document.getElementById("first").onclick = function() {
// //     const element = document.getElementById("first");
// //     element.style.color = "red";
// //     element.textContent = "You clicked me!";
// // }

// const element = document.getElementById("first");
// element.addEventListener("click", function() {


// const child1 = document.getElementById("child1");
// child1.addEventListener("click", function(event) {
//     child1.textContent = "Child 1 clicked!";
//     // Prevents the event from bubbling up to parent elements
// });

// const parent = document.getElementById("parent");

// for (let child of parent.children) {
//     child.addEventListener("click", function(event) {
//         child.textContent = `${child.id} clicked!`;
//         //event.stopPropagation(); // Prevents the event from bubbling up to parent elements
//     });
// }


const grandparent = document.getElementById("grandparent");

grandparent.addEventListener("click", function(event) {
    alert(`You clicked on: ${event.target.id}`);
});
const parent = document.getElementById("parent");

parent.addEventListener("click", function(event) {
    alert(`You clicked on: ${event.target.id}`);
});
const child = document.getElementById("child");

child.addEventListener("click", function(event) {
    alert(`You clicked on: ${event.target.id}`);
});