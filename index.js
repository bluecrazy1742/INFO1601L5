

let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

console.log(area)

let name = "bob";
let age = 24;

console.log(typeof (name))
console.log(typeof (age))

console.log(`Hello my name is ${name}, I'm ${age} years old.`)

console.log(`I was born in ${2020 - age}`)

console.log('1' == 1);
console.log(1 == true); 
console.log("false" == false);
console.log("false" == true); 

if("true")
   console.log("Hello true!") 


console.log('1' === 1); 
console.log(1 === true); 
console.log("true" === true);

for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ 
    console.log('fizzbuzz');
  }else 
    if(i%3 === 0){
    console.log('fizz');
  }else if(i%5 === 0){
    console.log('buzz');
  }else{             
    console.log(i);
  }
}

let nowTimestamp = Date.now()


let now = new Date(nowTimestamp);


console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `);



function happyPrint(string){
 console.log("😀: "+string);
}

function sadPrint(string){
 console.log("😢: "+string);
}

//This high-order function adds 2 parameters and passes the answer to the callback
function add(a, b, callback){
   let ans = a + b;
   callback(ans);// call the callback and pass the answer to it
}

//call add passing the callbacks to it

add(5, 10, happyPrint);
add(11, 12, sadPrint);

let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));