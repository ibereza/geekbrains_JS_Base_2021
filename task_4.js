/*
*Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

let sign = 'x';

for (let i = 0; i < 20; i++) {
    console.log(sign);
    sign += 'x';
}
