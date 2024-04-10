var informationDetails ={
    name:'Bharath',
    lastName:'kumar',
    rollNumber:221075,
    present: true,
    family: {
        fatherName :'Bharath',
        place:'sangareddy',
    },

    nameAgain:["bharath","Abhilash"]
}
console.log(informationDetails);

let detailsForm =[{id:"bharath" ,rollNumber:2522,city:"sangareddy"},true,false,"Abhilash"];
console.log(detailsForm)


let name =["bharath",2020,true]
console.log(name);

let bioData ={
    name:'bharath',
    lastName:'kodakanti',
    rollNumber:151242,
    present: false,
    family:{
        fatherNamr:'bharath',
        place:'sangareddy',
    }
}
console.log(bioData);

let num1= 35;
let num2= 15;
let totalReminder = num1 % num2;
console.log(totalReminder);


// division
 let divi = 55;
 let divi2 = 6;
 let division = divi%divi2;
 console.log(division);

//  Exponential
let firstExpo = 6;
let powerNum =6;
let expo = firstExpo**powerNum;
console.log(expo);
// var str =["hello world " ,"bharath","nhdjdjdj"];
// document.getElementById("demo").innerHTML= str.slice(2);
// implicite
let person ="22";
console.log(typeof(person));
let rollNumber =25
console.log(typeof(rollNumber));
let rollNumber2 =25;
console.log(typeof(rollNumber2));
let merged =person+rollNumber+rollNumber2;
console.log(merged)
console.log(typeof(merged));

// explicite
let exNum1 =25;
let exNum2 = '25';
let add =exNum1+exNum2;
console.log(typeof(exNum2),add,"before converting :");
// let add2 =exNum1 + exNum2;
exNum2 =Number(exNum2);
let add2 =exNum1 + exNum2;
// let add2 =exNum1 + exNum2;
console.log(typeof(exNum2),add2,"after converting :");

let myDay =new Date();
let day = myDay.getDay();
let year =myDay.getFullYear();
let month = myDay.getMonth();
let hours = myDay.getHours();
let millsec = myDay.getMilliseconds();
console.log("date and time:",myDay);
console.log("my day:", day);
console.log("year:",year);
console.log("month:",month);
console.log("hour:",hours);
console.log("millisec:",millsec);


// pi values
let pi =3.786
let floorPi= Math.floor(pi);
console.log("pi value by floor method  one type for single",floorPi)
// let ceilPi =Math.ceil(pi)
// console.log("ceilvaule:",ceilPi)
let myNumber = 21;
let myNumber2 = 35;

let myMin =Math.min(myNumber2,myNumber);
console.log("Min:",myMin);
let myMax =Math.max(myNumber,myNumber2);
console.log("Max:",myMax);

// Squareroot

let theNumber =266;
let theSquare =Math.sqrt(theNumber);
console.log("the square root of 266:",theSquare);

// roudedvalue two different cases
let roundNum= 255.2500;
 let roundedNum = Math.round(roundNum);
 console.log("the rouded value",roundedNum);
let roundNum1 = 255.579;
let roundedNum1 = Math.round(roundNum1);
console.log("the value shows above the 255.579:",roundedNum1);

let myFloorNum1 =356.66;
let myFloor1 =Math.floor(myFloorNum1);
console.log("the below number",myFloor1);

let myceilNum =356.66;
let myceil1 =Math.ceil(myceilNum);
console.log("the above number",myceil1);


// genrate the random Numbers:

let generateRandomNumber =Math.random();
let generateRandomNumber1 =(generateRandomNumber*100)+1
console.log("RandomNumber without decimal",Math.ceil(generateRandomNumber1));











