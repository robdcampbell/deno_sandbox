//TYPESCRIPT NOTES
// FIRST EXAMPLE
var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
//console.log(answer);
// DATA TYPES
//boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'blue';
var ageQuote = "I'm not old, I'm only " + age + ".";
// arrays
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var nooo = null;
// Tuple (mixed data-ype array, order-specific)
var basket;
basket = ['basketball', 5];
// Enum (allow you to assign named Constants)
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
// ANY - !!!!!!!!!!!! Be Careful
var whatever = 'aghshdfghghhg NOOOOOO!';
whatever = 5;
whatever = true;
whatever = basket;
// void
var sing = function () {
    console.log('lalalalalalalallla');
    // return  'lala' -> will throw an error, shouldn't return anything
};
// never (can have no reachable endpoint)
var error = function () {
    throw Error('ooooooops');
};
;
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
;
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'alalalalalalalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAWR');
lion.greet();
// Union   (can be either of the 2 listen data types)
var confused = 'hello';
// Type inference 
var x = 4;
//  x ='hello';   -> will throw an arrow, because  'let x=4' assumed the data type is a number and stored it that way
