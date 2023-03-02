let listOfGoods = [
  {
    id: 1,
    name: "Портер",
    description: "Темное пиво",
    size: [0.5, 1, 2],
    price: 50,
    available: true,
  },
  {
    id: 2,
    name: "Лагер",
    description: "Светлое пиво",
    size: [0.5, 1, 2],
    price: 30,
    available: true,
  },
  {
    id: 3,
    name: "IPA",
    description: "Крафтовое пиво",
    size: [0.3, 0.5],
    price: 100,
    available: false,
  },
  {
    id: 4,
    name: "Sour",
    description: "Бельгийское пиво",
    size: [0.3, 0.5],
    price: 100,
    available: true,
  },
  {
    id: 5,
    name: "Ale",
    description: "Традиционное английское пиво",
    size: [0.5, 1],
    price: 100,
    available: false,
  },
];

let shoppingCart = [
  { good: 1, amount: 10 },
  { good: 2, amount: 30 },
];

// Добавление в корзину
function addingToShoppingCart(id, cuantity) {
  if (
    listOfGoods.find(
      (element) => element.id === id && element.available === true
    )
  ) {
    return shoppingCart.push({
      good: listOfGoods.find((element) => element.id === id).id,
      amount: cuantity,
    });
  } else
    console.log(
      `Товар ${
        listOfGoods.find((element) => element.id === id).name
      } временно недоступен, поэтому его нельзя добавить в корзину.`
    );
}

// Очистка корзины
function deleteAllFromCart() {
  shoppingCart = [];
}

// Удаление товара из корзины
function deleteItemFromShoppingCart(good, amount) {
  let index = shoppingCart.findIndex((element) => element.good === good);
  if (shoppingCart[index].amount - amount > 0) {
    return (shoppingCart[index].amount -= amount);
  } else {
    return shoppingCart.splice(index, 1);
  }
}

function calculateFinalAmountAndSum() {
  let totalAmount = 0;
  let totalSum = 0;
  for (let item of shoppingCart) {
    totalAmount += item.amount;
    totalSum +=
      listOfGoods.find((element) => element.id === item.good).price *
      item.amount;
  }
  return [totalAmount, totalSum];
}

addingToShoppingCart(3, 30);

deleteItemFromShoppingCart(1, 5);

addingToShoppingCart(4, 20);

deleteAllFromCart();

addingToShoppingCart(1, 10);

addingToShoppingCart(4, 30);

console.log(calculateFinalAmountAndSum());
