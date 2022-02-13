
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



// Urok 26 
// Операторы сравнения 
// Операции сравнения всегда будут возвращать одно из след значений
// TRUE  - истина
// FALSE - ложь 
// ==  это оператор сравнения  2 == 4  (она конвертирует значение в числа)
// > - операция сравнения на большинство  8 > 4 
// < - операция сравнения на меньшинство  4 < 2
// ! - не равно  12! = 5   двенадцать не равна к 5 


// Условные операторы 
// if  - если 
// else - в противном случае 

if (2 == 3) {
    console.log('ответ верный');

}
else{
    console.log('ответ не верный');
}

