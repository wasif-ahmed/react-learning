class Person {
    constructor(name='Anonymous', age='0'){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi my name is ${this.name} and my age is ${this.age}`;
    }
}  

class Traveleller  extends Person{
    constructor(name,age,homeLocation='Any')
    {
        super(name,age);
        this.homeLocation = homeLocation;
    }
getGretting(){
    let gretting = super.getGretting();
    if(this.homeLocation){
    gretting+= `, I am visiting from ${this.homeLocation}`;
    }
    return gretting;
}
}

const person1 = new Traveleller('Wasif',24,'New Zealand');
console.log(person1.getGretting());
const person2 = new Person( );
console.log(person2.getGretting());
const person3 = new Traveleller( );
console.log(person3.getGretting());