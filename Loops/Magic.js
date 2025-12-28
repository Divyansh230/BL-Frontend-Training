const num = Math.floor(Math.random() * 100) + 1;

let start = 1;
let end = 100;
let x = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid == num) {
        console.log(`🥳Success...!your number is ${mid}`);
        x++;
        break;
    }
    if (num > mid) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }

}
if (x == 0)
    console.log("🙇I Failed");