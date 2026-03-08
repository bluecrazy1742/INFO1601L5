

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

function add(a, b, callback){
   let ans = a + b;
   callback(ans);
}


add(5, 10, happyPrint);
add(11, 12, sadPrint);

let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));


let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];



function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}


let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];
console.log(avgBMI(people));

function getAverageGrade(student, course) {
for (let i=0; i<student.transcript.length; i++){
  if(student.transcript[i].course === course){
    let sum = 0;
    for(let j=0; j<student.transcript[i].grades.length; j++){
      sum += student.transcript[i].grades[j];
    }
    return sum / student.transcript[i].grades.length;
  }
}
return -1;
}

function getAssignmentMark(student, course, num) {
for (let i=0; i<student.transcript.length; i++){
  if(student.transcript[i].course === course){
    if(num < student.transcript[i].grades.length && num >= 0){
      return student.transcript[i].grades[num];
    }
  }
}

return -1;
}


function averageAssessment(students, courseName, assignment){

let arr = [12, 33, 4, 5, -4, 8, 19, 25];
                
//map() creates a new array from the elements of one without changing the old one
function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(num){
  return element%2 !== 0; 
}
//Filter takes a test condition and returns only the element which 
//make the condition true
let odds = arr.filter(isOdd);
console.log(odds);

//Returns true or false if any of the elements of the array 
//meets a specified condition
function has5Factor(){
  return ele % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

//sort function must return either 0, +ve, -ve
let ascending = arr.sort(intCompare)
console.log(ascending);

  

 function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people)); 










}