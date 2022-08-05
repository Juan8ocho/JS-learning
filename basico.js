// Array 
var animales = ['Elephant','Tiger', 'Ant', 'Lion','Frog','Meerkat','Leopar','Crane']
console.log(animales[2]);

console.log(animales.length);

animales.push('Bear');   // agrega ultimo
animales.pop();          // borra ultimo
animales.shift('Monkey');  //agrega al principio
animales.splice(3,0,'Snake');  // agrego a un ( posicion que quiero , cuanto saco, lo que agrego)
animales.unshift(); // se borra el primero


var x =0;
var i =0;
while (i < 10) {
    console.log(x);
    x++;
}


var y =0;

 do {
    console.log(y);
    y++;
} while (y < 11);

for (i=0;i<10;i++){
    console.log(i);
}

function add (num1,num2){
    result = num1 + num2;
    return result;
}


var num1 = 28;
var num2 = 46;

console.log(add (num1,num2));