let size = 8, i, j;
let chess = "";
for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            chess += " ";
        }
        else {
            chess += "#";
        }
    }
    chess += "\n";
}
console.log(chess);