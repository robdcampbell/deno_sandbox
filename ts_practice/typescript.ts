//TYPESCRIPT NOTES


// FIRST EXAMPLE
const sum = (a: number, b: number) => {
    return a+b;
}

const answer = sum(4,5)

console.log(answer);



// DATA TYPES

//boolean
let isCool: boolean =  true;

// number
let age: number = 56;

// string
let eyeColor: string = 'blue';
let ageQuote: string = `I'm not old, I'm only ${age}.`;

// arrays
let pets: string[] = ['cat','dog','pig'];
let pets2: Array<string> = ['lion','dragon','lizard'];

// object
let wizard: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let nooo: null = null;

// Tuple (mixed data-ype array, order-specific)
let basket: [string, number];
basket = ['basketball',5];

// Enum (allow you to assign named Constants)
enum Size {Small = 1, Medium = 2, Large = 3};
let sizeName: string = Size[2];

// ANY - !!!!!!!!!!!! Be Careful
    let whatever: any = 'aghshdfghghhg NOOOOOO!';
    whatever = 5;
    whatever = true;
    whatever = basket;

// void
let sing = ()=> {
    console.log('lalalalalalalallla');
    // return  'lala' -> will throw an error, shouldn't return anything
}

// never (can have no reachable endpoint)
let error =  (): never =>{
    throw Error('ooooooops');
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!')
}