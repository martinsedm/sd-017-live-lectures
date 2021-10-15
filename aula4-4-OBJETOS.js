//let arrNome = [];
// objeto
//let arrObj = {};


let person = {
     firstName : 'Murilo', // propriedade ou atributos
     lastName : 'Flesch',
     agePerson : 36,
     canDrive : true,
     favoriteMovies : ['Intererestellar', 'Matrix'],
     adress: {
         street: 'Cristovam Colombo',
         number: 455,
     }
};

// LENDO OBJETOS
let myName = person.firstName;
let street = person.adress.street;

//console.log(    person.firstName     );  // notação de ponto
//console.log(   person['firstName']     );  // notação colchetes


// ATUALIZANDO OBJETOS
person.agePerson = 25;
person['agePerson'] = 20;
//console.log(person.agePerson);

let nome = ['murilo']
nome[0]
//console.log(person)

for(let key in person) {
    console.log(person[key])
    
    if(key === 'firstName'){
        break;
    }
}