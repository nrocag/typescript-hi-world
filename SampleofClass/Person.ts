class Person {
    constructor(public name?: string, public age?: number, public gender: Gender = Gender.Male) {

    }

    public toString() {
        return `Nombre: ${this.name} - Edad: ${this.age} - Genero ${this.gender}`;
    }

    public walk() {

    }

    public eat(): boolean {
        console.log(`${this.name} Está comiendo fruta`);
        console.log(`${this.name} Teminó de comer`);
        this.digestion();

        return true;
    }

    private digestion(): void {
        console.log(`${this.name} Está haciendo digestión`);
    }
}

enum Gender { Male = 1, Femile = 2 };


let nestor = new Person("Nestor", 25, Gender.Male);
console.log(nestor.toString());
let juan = new Person("Juan", 22);
console.log(juan.toString());
let sandra = new Person("Sandra", 30, Gender.Femile);
console.log(juan.toString());

juan.eat();
