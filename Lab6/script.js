/*// Метод map
let addArray = [1, 3, 1, 7, 9];
let addArray2 = addArray.map((el) => el + 20);
console.log(addArray2);
// [ 21, 23, 21, 27, 29 ]*/

/*// Метод filter
let filterArray = [1, 3, 1, 7, 9];
let filterArray2 = filterArray.filter((el) => el === 7 || el === 9);
console.log(filterArray2);
// [ 7, 9 ]*/

/*// Метод reduce
let reduceArray = [1, 3, 1, 7, 9];
let reduceArray2 = reduceArray.reduce((total, current) => total * current);
console.log(reduceArray2);
// 189*/

/*// Метод fined
let findArray = [6, 7, 3, 9, 5, 10, 15];
let findArray2 = findArray.find((el) => el < 15);
console.log(findArray2);
// 6*/

/*// Метод findIndex
let fiArray = [27, 7, 3, 9, 5, 10, 15];
let fiArray2 = fiArray.findIndex((el) => el == 15);
console.log(fiArray2);
//6*/

/*// Метод indexOf
let colors = ["Yellow", "Pink", "Blue", "Green"];
let result = colors.indexOf("Green");
console.log(result);
//3*/

/*// Метод push
let arr = [6, 7, 15, 9, 5, 10, 7];
let pushed = arr.push(14);
console.log(pushed);
console.log(arr);
// 8
//[
//  6,  7, 15,  9,
//  5, 10,  7, 14
//]*/

/*// Метод pop
let arr = [6, 7, 15, 9, 5, 10, 7];
let del = arr.pop();
console.log(del);
console.log(arr);
//7
//[ 6, 7, 15, 9, 5, 10 ]*/

/*// Метод shift
let arr = [6, 7, 15, 9, 5, 10, 7];
let del = arr.pop();
console.log(del);
console.log(arr);
//7
//[ 6, 7, 15, 9, 5, 10 ]*/

/*// Метод unshift
let arr = [6, 7, 15, 9, 5, 10, 7];
let unshifted = arr.unshift(5, 6, 7);
console.log(unshifted);
console.log(arr);
//10
//[
//  5, 6, 7,  6, 7,
// 15, 9, 5, 10, 7
//]*/

/*// Метод splice
let arr = ["Daniil", "Denis", "Vitalik", "Anton", "Denis"];
arr.splice(4, 1, "Maksim");
console.log(arr);
// [ 'Daniil', 'Denis', 'Vitalik', 'Anton', 'Maksim' ]*/

/*// Метод slice
let arr = ["Daniil", "Denis", "Vitalik", "Anton", "Denis"];
let sliced = arr.slice(1, 4);
console.log(sliced);
// [ 'Denis', 'Vitalik', 'Anton' ]*/

/*// Метод sort
let arr = [25, 12, 1, 28, 5];
let sorted = (firstEl, secondEl) => firstEl - secondEl;
arr.sort(sorted);
console.log(arr);
// [ 1, 5, 12, 25, 28 ]*/

let mas1 = [];
document.write("Масив1" + "</br>");
for (let i = 0; i < 10; i++) {
  mas1[i] = Math.random();
  document.write(mas1[i] + "</br> ");
}

let mas2 = [];
document.write("Масив2" + "</br>");
for (let i = 0; i < 10; i++) {
  mas2[i] = Math.random() * 10;
  document.write(mas2[i] + "</br> ");
}

let mas3 = [];
document.write("Масив3" + "</br>");
for (let i = 0; i < 10; i++) {
  mas3[i] = Math.round(Math.random() * 10);
  document.write(mas3[i] + "</br> ");
}
