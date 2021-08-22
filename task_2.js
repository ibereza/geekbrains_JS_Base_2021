/*
Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов.
     Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const basket = {
    products: [
        {
            product: 'product_1',
            count: 5,
            price: 25
        },
        {
            product: 'product_2',
            count: 7,
            price: 33
        },
        {
            product: 'product_3',
            count: 3,
            price: 123
        }
    ],
    countBasketPrice() {
        return this.products.reduce(((sum, item) => sum + item.count * item.price), 0);
    }
};

console.log(basket.countBasketPrice());
