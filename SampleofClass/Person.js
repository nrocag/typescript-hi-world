"use strict";
class Person {
    constructor(name, age, gender = Gender.Male) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString() {
        return `Nombre: ${this.name} - Edad: ${this.age} - Genero ${this.gender}`;
    }
    walk() {
    }
    eat() {
        console.log(`${this.name} Está comiendo fruta`);
        console.log(`${this.name} Teminó de comer`);
        this.digestion();
        return true;
    }
    digestion() {
        console.log(`${this.name} Está haciendo digestión`);
    }
}
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Femile"] = 2] = "Femile";
})(Gender || (Gender = {}));
;
let nestor = new Person("Nestor", 25, Gender.Male);
console.log(nestor.toString());
let juan = new Person("Juan", 22);
console.log(juan.toString());
let sandra = new Person("Sandra", 30, Gender.Femile);
console.log(juan.toString());
juan.eat();
