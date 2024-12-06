// If2
// let number = parseInt(prompt("Sonni kiriting:"));
// if (number > 0) {
//     number += 1;
// } else {
//     number -= 2;
// }
// console.log("Hosil bo'lgan son:", number);

// If3
// let number = parseInt(prompt("Sonni kiriting:"));

// if (number > 0) {
//     number += 1;
// } else if (number < 0) {
//     number -= 2;
// } else {
//     number = 10;
// }

// console.log("Hosil bo'lgan son:", number);

// if4
// let a = parseInt(prompt("1-sonni kiriting:"));
// let b = parseInt(prompt("2-sonni kiriting:"));
// let c = parseInt(prompt("3-sonni kiriting:"));

// let musbat = 0;

// if (a > 0) musbat += 1;
// if (b > 0) musbat += 1;
// if (c > 0) musbat += 1;

// console.log("Musbat sonlar soni:", musbat);

// if5
// let a = parseInt(prompt("1-sonni kiriting:"));
// let b = parseInt(prompt("2-sonni kiriting:"));
// let c = parseInt(prompt("3-sonni kiriting:"));

// let musbat = 0;
// let manfiy = 0;

// if (a > 0) musbat += 1;
// if (b > 0) musbat += 1;
// if (c > 0) musbat += 1;

// if (a < 0) manfiy += 1;
// if (b < 0) manfiy += 1;
// if (c < 0) manfiy += 1;

// console.log("Musbat sonlar soni:", musbat);
// console.log("Manfiy sonlar soni:", manfiy);

// if6
// let a = parseInt(prompt("1-sonni kiriting:"));
// let b = parseInt(prompt("2-sonni kiriting:"));

// let max;
// if (a > b) {
//   max = a;
// } else {
//   max = b;
// }

// console.log("Katta son:", max);

// if7
// let a = parseInt(prompt("1-sonni kiriting:"));
// let b = parseInt(prompt("2-sonni kiriting:"));

// let min;
// if (a < b) {
//   min = 1;
// } else {
//   min = 2;
// }

// console.log("Kichik sonning tartib raqami:", min);

// if8
// let a = parseInt(prompt("1-sonni kiriting:"));
// let b = parseInt(prompt("2-sonni kiriting:"));

// if (a > b) {
//     console.log("Katta son:", a);
//     console.log("Kichik son:", b);
// } else {
//     console.log("Katta son:", b);
//     console.log("Kichik son:", a);
// }

// if9
// let A = parseFloat(prompt("A sonini kiriting:"));
// let B = parseFloat(prompt("B sonini kiriting:"));

// if (A > B) {

//     let replacement = A;
//     A = B;
//     B = replacement;
// }
// console.log("Kichik son (A):", A);
// console.log("Katta son (B):", B);

// if10
// let A = parseInt(prompt("A sonini kiriting:"));
// let B = parseInt(prompt("B sonini kiriting:"));

// if (A !== B) {
//   let sum = A + B;
//   A = sum;
//   B = sum;
// } else {
//   A = 0;
//   B = 0;
// }

// console.log("A ning qiymati::", A);
// console.log("B ning qiymati:", B);

// if11
// let A = parseInt(prompt("A sonini kiriting:"));
// let B = parseInt(prompt("B sonini kiriting:"));
// if (A > B) {
//   B = A;
// } else if (A < B) {
//   A = B;
// } else {
//   A = B = 0;
// }
// console.log("A ning qiymati:", A, "B ning qiymati:", B);

// if12
// let A = parseInt(prompt("A sonini kiriting:"));
// let B = parseInt(prompt("B sonini kiriting:"));
// let C = parseInt(prompt("C sonini kiriting:"));

// if (A <= B && A <= C) {
//     console.log("Eng kichik son:", A);
// } else if (B <= A && B <= C) {
//     console.log("Eng kichik son:", B);
// } else {
//     console.log("Eng kichik son:", C);
// }

// if13
// let A = parseInt(prompt("A sonini kiriting:"));
// let B = parseInt(prompt("B sonini kiriting:"));
// let C = parseInt(prompt("C sonini kiriting:"));

// let middle;

// if ((A > B && A < C) || (A > C && A < B)) {
//   middle = A;
// } else if ((B > A && B < C) || (B > C && B < A)) {
//   middle = B;
// } else {
//   middle = C;
// }

// console.log("O‘rtacha son:", middle);

// if14
// let A = parseInt(prompt("A sonini kiriting:"));
// let B = parseInt(prompt("B sonini kiriting:"));
// let C = parseInt(prompt("C sonini kiriting:"));

// let min, max;

// if (A <= B && A <= C) {
//     min = A;
// } else if (B <= A && B <= C) {
//     min = B;
// } else {
//     min = C;
// }

// if (A >= B && A >= C) {
//     max = A;
// } else if (B >= A && B >= C) {
//     max = B;
// } else {
//     max = C;
// }

// console.log("Eng kichik son:", min);
// console.log("Eng katta son:", max);

// if15
// let A = parseInt(prompt("A sonini kiriting:"));
// let B = parseInt(prompt("B sonini kiriting:"));
// let C = parseInt(prompt("C sonini kiriting:"));

// let sumAB = A + B;
// let sumAC = A + C;
// let sumBC = B + C;

// if (sumAB > sumAC && sumAB > sumBC) {
//     console.log("Eng katta yig‘indilar:", A, B);
// } else if (sumAC > sumAB && sumAC > sumBC) {
//     console.log("Eng katta yig‘indilar:", A, C);
// } else if (sumBC > sumAB && sumBC > sumAC) {
//     console.log("Eng katta yig‘indilar:", B, C);
// } else {
//     console.log("Ikkidan ortiq yig‘indi teng.");
// }
