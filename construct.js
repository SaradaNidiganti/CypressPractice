function Alien(name,tech){
    this.name = name;
    this.tech = tech;
    this.work = function(){
        console.log("This is another way of function creation in obj");
    }
}

let alien1 = new Alien("sarada","Cypress")
let alien2 = new Alien("Ranjit","BigData")

console.log(alien1);
console.log(alien2.tech);

