const button = document.getElementById('bt1');

button.addEventListener('click', () => {
    let arr = [];
    arr.push(document.getElementById('header'));

    const box = document.getElementById('two');
    for (let i of box.children) {
        if (i.innerText[i.innerText.length - 1] === 'h') {
            arr.push(i);
        }
    }
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        // Get computed background colors from CSS
        let tempBg = window.getComputedStyle(arr[i]).backgroundColor;
        let tempText = arr[i].innerText;
        
        // Get the computed background color of the next element
        let nextBg = window.getComputedStyle(arr[i + 1]).backgroundColor;
        
        // Swap background colors and text
        arr[i].style.backgroundColor = nextBg;
        arr[i].innerText = arr[i + 1].innerText;
        
        arr[i + 1].style.backgroundColor = tempBg;
        arr[i + 1].innerText = tempText;
    }

});