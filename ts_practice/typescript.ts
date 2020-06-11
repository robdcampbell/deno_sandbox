//TYPESCRIPT NOTES


// FIRST EXAMPLE
const sum = (a: number, b: number) => {
    return a+b;
}

const answer = sum(4,5)

console.log(answer);

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