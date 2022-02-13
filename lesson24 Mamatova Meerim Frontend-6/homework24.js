// Mamatova Meerim Frontend - 6 

// Mamatova Meerim Frontend - 6 

let person = {
    first_name: "Elon",
    second_name: "Musk",
    age: 51,
    year: 1971,
    city: "Pretoria",
    parents: "Maye Musk",
    children: 7
};

console.log("Who is " + person.first_name + " " + person.second_name + "?");
console.log("Where " + person.second_name + " was born?" + "He was born in " + person.city + ".");

for(let key in person){
    console.log("ключ:" + key + " значение:" + person[key]);
}


// let info = ["Tesla", "Space X", "SolarCity", "Hyperloop", "Starlink", "Tesla Phone"];

// console.log(info[2]);

// for(let i=0; i < info.length; i++){
//     console.log(info);
// }
// info.forEach(function(item,i,info){
//     console.log(i + "company:" + item);
// });







