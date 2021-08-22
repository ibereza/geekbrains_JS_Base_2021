/* 
С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины. Нужно реализовать функционал
подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве.
Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

function countBasketPrice(basket) {
    return basket.reduce(((sum, item) => sum + item[1] * item[2]), 0);
}

let basket = [['product_1', 5, 25], ['product_2', 7, 33], ['product_3', 3, 123]];

console.log(countBasketPrice(basket));