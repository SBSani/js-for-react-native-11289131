// Task 1
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}
// for example
const result = processArray([5, 10, 15, 20]);
console.log(result);
// This gives us a result of [15, 100, 45, 400].