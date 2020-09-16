
let countBs = function (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            count++;
        }
    }
    return count;
}
console.log(countBs("BBC"));

let countChar = function (str, s) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === s) {
            count++;
        }
    }
    return count;
}
console.log(countChar("kakkerlak", "k"));