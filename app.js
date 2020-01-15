var firstName ='Jeremy';
const numOfStates = 50;

var a = 5 - 4;
    console.log(a);
    
function sayHello() {
    alert('Hello World!')
}

sayHello();

function checkAge(name, age){
    if (age < 21) {
         alert("Sorry "+ name +" you aren't old enough to view this page!")
    } 
};

checkAge("Charles",21);
checkAge("Abby",27);
checkAge("James",18);
checkAge("John",17);

var veggies = ["Bell Peppers", "Cabbage", "Garlic", "Carrots"];
    console.log(veggies);

var tester1 = [
    {name:'Tina', age:19},
    {name:'Bryan', age:30},
    {name:'JP', age:1},
    {name:'Janet', age:50},
    {name:'Gail', age:14},
]

for (var i=0; i<5; i++){
   checkAge(tester1[i].name, tester1[i].age);
    //console.log(tester1[i]);
};

 var anyWord='Hello World';
function getLength(anyWord){
    var n = anyWord.length;    
    // console.log(anyWord.length);
      if (n%2 == 0){
            console.log('The world is nice and even!');
        }else{
    console.log('The world is an odd place!');
    }
};

getLength(anyWord);
