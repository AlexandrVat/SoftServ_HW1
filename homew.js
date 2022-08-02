
//Task №1

let Radius = prompt('Вкажіть радіус кола.','');
let circleArea = Math.pow(Radius,2)*Math.PI ;

alert(`Площе круга = ${circleArea}`)
//console.log(`area of a circle ${circleArea}`);

//Task №2 

let age = prompt('Вкажіть ваш вік.','');
let pensionAge = prompt('Вкажіть вік виходу на пенсію.','');
let currentDate = new Date();

alert(`До пенсії вам залишилося ${pensionAge-age} років. Цу буде в ${currentDate.getFullYear(currentDate)+(pensionAge-age)} році.`)
//console.log(`До пенсії вам залишилося ${pensionAge-age} років. Цу буде в ${currentDate.getFullYear(currentDate)+(pensionAge-age)} році.`);
//console.log(` ${pensionAge-age} ${currentDate.getFullYear(currentDate)+(pensionAge-age)}`);


//Task №3.1 

let ranNumber = prompt('Вкажіть трицифрове число.','');

let retStr = [...ranNumber].reverse().join("");

//console.log(`${retStr}`);
alert(`${retStr}`)

//Task №3.2

let i = 0;
retStr = '';

for (i = 0; i < ranNumber.length; i++){
    retStr += ranNumber[(ranNumber.length - 1) - i];
 }

 console.log(`${retStr}`);
