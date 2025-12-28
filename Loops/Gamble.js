let stake = 100;
let goal = 200;
let bet = 1;

let wins = 0;
let bets = 0;

while (stake > 0 && stake < goal) {
    bets++;


    if (Math.random() < 0.5) {
        stake += bet;
        wins++;
    } else {
        stake -= bet;
    }
}

console.log("Final Amount:", stake);
console.log("Total Bets Made:", bets);
console.log("Total Wins:", wins);

if (stake === goal) {
    console.log("🎉 Gambler reached the goal!");
} else {
    console.log("💸 Gambler went broke!");
}