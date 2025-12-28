let i = 1;

while (i <= 11) {
    const coin = Math.floor(Math.random() * 2);
    if (coin == 0) console.log("Tails");
    else console.log("Heads");
    i++;
}