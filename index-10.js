// spread operator
function getTotal(a, b, c) {
    return a + b + c;
}
console.log(getTotal(10, 20, 30));

let numberss = [10, 20, 30];

//ES5
console.log(getTotal.apply(null, numberss));
//ES6
console.log(getTotal(...numberss));

let arr1 = ['two','three'];
let arr2 = ['one','four', 'five'];

arr1.push(...arr2);
console.log(arr1);
console.log('*************************');
// destructuring
var a,b,rest;
[a,b] = [10,20];
console.log(a);
console.log(b);
[a,b,...rest] = [10,20,30,40,50,60];
console.log(a);
console.log(b);
console.log(rest);
// array destructuring

const arrConfig = ['localhost','8080','900'];
// ES5
//var server = arrConfig[2];
//var port = arrConfig[1];
//var timeout = arrConfig[3];
//console.log(server,port,timeout);
//ES6

const  [server,port,timeout] =arrConfig;
console.log(server,port,timeout);
console.log('******************');

//OBJECT destructuring
const objConfig = {
    server1 : 'localhost',
    port1 : '8080',
    timeout1 : 900
} 
const {server1,port1,timeout1} = objConfig;
console.log(server1,port1,timeout1);
console.log(objConfig);

// call,apply,bind
var num = {
    min: 0,
    max: 100,
    checkNumericRange: function (value) {
        if (typeof value !== 'number') {
            return false;
        } else {
            return value >= this.min && value <= this.max;
        }
    }
}

console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));

var num1 = {
    min: 50,
    max: 70
};

console.log(num.checkNumericRange.call(num1, 65));
console.log(num.checkNumericRange.apply(num1, [52]));

var checkNumber = num.checkNumericRange.bind(num1);

console.log(checkNumber(56));

console.log('*******************');

// filter
const arr = [1, 2, 3, 10, 20, 30, 50, 55, 61, 79];

        let evesES6 = arr.filter(a => a % 2 == 0);
        console.log(evesES6);

 // find
 const users = [
     {
      id : 1,
      name : 'durmuş'   
     },
     {
         id : 2,
         name:'ahmet'
     },
     {
         id : 3,
         name : 'veli'
     }
 ]

console.log(users.find(user => user.id === 2));
// map

const numbers = [1,4,9]

const result = numbers.map(number => number*2)
console.log(result);

  // forEach
const sayi = [1,2,3,5]

let total = 0
sayi.forEach(say => total += say);
console.log(total)

// reduce
const number1= [1,2,3,5]

let total1 = 0

let total2 = number1.reduce((acc, item) => acc + item, 5)
console.log(total2)

let basket = [
    {
        name1 : 'IPhone 7' ,
        price : 2500
    },
    {
        name1 : 'Apple macbook',
        price : 2000
    }
]

let num2 = basket.reduce((acc,item1) => acc + item1.price, 0)
console.log(num2);

// some
const persons = [
    {
        ad : 'durmus',
        yas : 22
    },
    {
        ad : 'ahmet',
        yas : 20
    }

]

const res = persons.some(isAdult => persons.yas>=18)
console.log(res)
// findIndex

const num3 = [1,2,3,4,5,6]

const resl = num3.findIndex(num3 => num3 === 3 )
console.log(resl)
