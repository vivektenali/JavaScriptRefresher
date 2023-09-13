const myNums = [1, 2, 3];

const total = myNums.reduce((acc, currval) => acc + currval, 0);
//console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const cartTotal = shoppingCart.reduce((acc, curval) => acc + curval.price, 0);
console.log(cartTotal);
