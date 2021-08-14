/* 
С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

function power(val, pow) {
    if (pow === 0) {
        return 1;
    } else if (pow === 1) {
        return val;
    }
    return val * power(val, --pow);
}

console.log(power(2, 10)); // 1024
