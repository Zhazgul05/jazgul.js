// 1. Население Bishkek City равняется 2000000 жителей. Население New Balykchy равняется 1000 жителей. Напишите программу, которая определяет разницу в числе жителей между двумя городами. - 10 баллов

let bishkekCity = 2000000;
let NewBalykchy = 1000;

let result = bishkekCity - NewBalykchy;
console.log(result);

// 2. В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу, где дом, забора нет. - 10

let widthHome = 50;
let lenghtHome = 30;

console.log(widthHome * lenghtHome);

// площадь дома

let house = 20;
let houseb = 10;

console.log(house * houseb);

// Длина забора

let all = (widthHome + lenghtHome) * 2 - (house + houseb);
console.log("lenght of " + all);

console.log();

// 3. В браузере запрашиваются два числа. Если первое больше второго, то вычислить их сумму, иначе - произведение. После этого компьютер должен вывести **`alert ЗАДАЧА РЕШЕНА`**. - 10

let number = prompt("write number: ");
let number1 = prompt("write second number: ");
if (number > number1) {
  alert("Задача решена");
} else {
  alert("Задача решен");
  document.write(number * number1);
}

// 4.Дракон каждый год отращивает по три головы, но после того, как ему исполнится 100 лет - только по две. Сколь-ко голов и глаз у дракона, которому N лет? - 10

// let animal = prompt("how old are you dragon?")
// let a = 2;
// let b = 3;

// for ()

// 5.  Пусть браузер, узнав возраст человека, дальнейшую беседу ведет по двум вариантам. Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" и получив ответ, глубокомысленно заметить "Хороший институт". Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: "До следующей встречи!". - 10

let userAge = prompt("How old are you?");

if (userAge > 17) {
  prompt("which university are you study?");
  alert("the best university!");
  alert("Good buy!");
} else if (userAge < 17) {
  prompt("which school are you study?");
  alert("good school!");
  alert("Good buy!");
}
