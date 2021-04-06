class Worker{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return this.name+" "+ this.surname;
    }
}
class Developer extends Worker{}
class Tester extends Worker{}
class Project{
    constructor() {
        this.developers = [];
        this.testers = [];
    }
    addDeveloper(developer){
        this.developers.push(developer.getFullName());
    }
    addTester(tester){
        this.testers.push(tester.getFullName());
    }
    getTeam(){
        return {developers:this.developers,testers:this.testers};
    }
}


const superPuper = new Project();

const bob = new Developer('Bob', 'Smith');
const john = new Developer('John', 'Doe');

const alex = new Tester('Alex', 'Green');



superPuper.addDeveloper(bob);
superPuper.addDeveloper(john);
superPuper.addTester(alex);

console.log(bob.getFullName());
console.log(superPuper.getTeam());