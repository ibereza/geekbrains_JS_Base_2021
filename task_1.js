/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
const n = 100;

let arr = [];
for (let i = 0; i <= n; i++) {
    arr.push(i);

}

let i = 2;
while (i < n) {
    if (arr[i] != 0) {
        let j = i + i;
        while (j <= n) {
            arr[j] = 0;
            j = j + i;
        }
    }
    i++;
}


console.log(arr.filter(e => e != 0));
