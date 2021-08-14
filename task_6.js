/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function dev(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return sub(arg1, arg2);
        case '*':
            return mul(arg1, arg2);
        case '/':
            return dev(arg1, arg2);
        default:
            return 'Что-то пошло не так...';
    }
}

console.log(mathOperation(5, 2, '+'));
console.log(mathOperation(5, 2, '-'));
console.log(mathOperation(5, 2, '*'));
console.log(mathOperation(5, 2, '/'));
console.log(mathOperation(5, 2, 'что-то'));
