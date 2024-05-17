// Task 1
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}
// for example
const result = processArray([5, 10, 15, 20]);
console.log(result);
// This gives us a result of [15, 100, 45, 400].

// Task 2
function formatArrayStrings(stringArr, numArr) {
    return stringArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
        });
    }
    
// for example
const strings = ['Kalu', 'Champ', 'Boss', 'Post'];
const numbers = processArray([1, 2, 3, 4]);
const formattedStrings = formatArrayStrings(strings, numbers); 
console.log(formattedStrings);
// the formatted strings gives us [ 'kalu', 'CHAMP', 'boss', 'POST' ]