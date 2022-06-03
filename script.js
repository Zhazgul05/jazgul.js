//1. Напишите функцию, которая может преобразовывать строку в число - 10 баллов

function strToNumber(str) {
  str = Number(str);
  return str;
}

console.log(strToNumber("12"));

//2. Напишите функцию, которая проверяет число четное или не четное: если четное возвращает **`true`** иначе **`false`** - 10 баллов

function Number(a, b) {
  if (a % b === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

Number(18, 2);

//3. Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать **`true`** или **`false` -** 10 баллов

function ElementInArray(array, element) {
  let result = array.includes(element);
  return result;
}

let userNames = ["Rayana", "Shabdan", "Aisha", "Erhan"];

console.log(ElementInArray("Aisha", userNames));
console.log(ElementInArray("Rayana", userNames));
document.write(ElementInArray("Shabdan"));
