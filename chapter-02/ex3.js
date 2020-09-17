/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

*/

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