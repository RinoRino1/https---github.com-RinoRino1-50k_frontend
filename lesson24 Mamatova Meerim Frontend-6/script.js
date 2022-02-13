
let age = '36';
let year = '1985';
let name_first = 'Meerim';

console.log(age); 
console.log(year);
console.log(name_first);
console.log('My name is ' + name_first + ', ' + 'I was born at ' + year + ' and I\'m ' + age + ' years old.');


// объекты через фигурные скобки
let obj = {
    first_name: "Meerim",
    age: 26,
    city: "Bishkek"
};
console.log("name:" + obj.first_name + " age:" + obj.age);
console.log(obj["age"]);

// Массив создается через квадратные скобки
// в массивах из-ся сразу значения
// для получения значения необходимо вызывать порядковый номер , индекс который начинается с 0

let arr = ["apple", "Iphone", "Ipad"];
console.log(arr[1]);

// 25 urok

// Базовые функции / Взаимодействие с пользователем
console.log(arr);

// модальное окно системное, дизайн изменить нельзя
alert("hello");    

var years = prompt('How old are you?', 100);
// prompt - состоит из 2 частей
// 1 часть - вопрос
// 2 часть - ответ по умолчанию 
// prompt - запоминает введеные данные для дальнейшей обработки

alert('You are big girl ' + years + ' !');






