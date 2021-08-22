/*
*Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

let pyramid = '';

for (let i = 1; i <= 20; i++) {
    for (let j = 0; j < i; j++) {
        pyramid += 'x';
    }
    pyramid += '\n';
}

console.log(pyramid);
