//Javascript Datatype String
var colorShort= 'redWhiteRainbow';
var try1 = colorShort.length;



var str1 = "I want to be a, Billionaire";
var try2 = str1.indexOf("Billionaire")



var str3 = "banana,mango,apple,guava";
var try3 = str3.slice(7,12) 


var str4 = "Please  make me Billionaire";
var try4 = str4.replace("Billionaire","Millionaire & Health")
//console.log(str4);
//console.log(try4);

//Javascript Data Type Number
var jayAge = 25;
var jadeAge = 17+ jayAge;   
var karlaAge = 24;
var Spouse = jayAge + jadeAge / karlaAge +34*7-(jadeAge*jayAge*karlaAge);
//console.log(Spouse);
var sugar = 10.3232302;
var salt = sugar.toPrecision(   );  
var ajinimoto = sugar.toPrecision(7);
//console.log(salt);
//console.log(ajinimoto);

//to convert Number to String
var vote =10000;
ActualVote = vote.toString();  
//console.log(vote+20);  
//console.log(ActualVote+20);  

//Run IN Cosole Browser
//var Question1 = prompt("Who are you?");
//var question2 = prompt("Where you from?");
//console.log("You are" + Question1 + " verified");
//console.log("So you are from"+ question2);

//first System  Auotomate Website of Junnil Jay Estillore using js HAHA
//console.log("Hello,Welcome! to my J & J  Company");
//console.log("We offer Web Services for 100$ to 1000$");
//var question1 = prompt("How many website you want to build?");
//var question2 = prompt("How many website is urgent?");
//var question3 = prompt ("How much is your budget");

//question1 = parseInt(question1);
//question2 = parseInt(question2);
//question3 = parseInt(question3);

//calculation1 = question1 * 100;
//calculation2 = question2 * 3;

//var taxes = (calculation1+calculation2)*0.1;

//var total = (calculation1+calculation2+question3+taxes);
//console.log(" Your have  ordered " + question1 + " website total of " + calculation1 + " $ ");
//console.log(" You also ordered" + question2 + " Website total of " + calculation2 + " $");
//console.log( " You have left" + question3 + "$ as a tip. The total of your bills is " + total + "$ with taxes ");


//Using ARRAY
var carArray1 = ["Tesla","BMW","Toyota","Swift","Mercedez"];
var mixArray1 = ["Jay Estillore",10,9,true,"Cebu Philippines"];

carArray1[1] = "Wego"; 
mixArray1[4] = "Biliran Phillipines"

var car1 = carArray1[3];
var mix1 = mixArray1 [0] +" has a car of  "+ carArray1[0];
var carArray2 =  carArray1.length;
//console.log("The car is " +car1);
//console.log("This car has a total of " +carArray2 + " Brands.");
//console.log(mix1 +"  "+ mixArray1[3]);

//js functions

function job(job){
    var job = "Teacher ";
//console.log("I want to be a  " + job);
}

function myOrder(quanitity,price){
//console.log("Here is my " + quanitity + " choices ");
//console.log("The Salary each job is " + price + " $ ");
//console.log("The total to salary is "+ quanitity*price+ " dollars");
//}

job("Teacher")
myOrder(3,4)

//IF ELSE CONDITION
//console.log("Welcome to Coffee Shop!");
//var q1 = prompt("Would you Like Coffee or Me?");

//if (q1=="Coffee"){
   // var q2 =prompt("Would like water with your coffee ?");
    //if(q2 == "Yes"){
      //  console.log("You order coffee and water");
//} 
    //else if (q2!="Yes"){
      //  console.log("You have order Only Coffee");
   // }
//} else if(q1=="water"){
   // var q3 = console.log("Would you like water with your Coffee?");
  //  if(q3 == "Yes"){
       // console.log("You order Water");
   // } else if (q3 !="Yes"){
   // console.log("Your oder is me");
    //}
//} else {
//console.log("No Order");
//}
}
//For Loop
/*
var x = 6;

for(i = 0; i<=x; i+=2){
console.log("Practice! Make you become successful of this "+  i + " number" );
}


//While Loop
console.log("Welcome to Our App");
pass = prompt("Please create a Password.");
console.log ("Your password has been created thank you!");

passtry = prompt("Please Enter your Password");

while (passtry != pass) {
    passtry = prompt("Wrong Password Please try agian");
}

console.log= prompt("You are log in"); */
//****** Final Project *****
/*
// Welcome messages
console.log("Hi, welcome to the FoodMarket App");
console.log("Let's create an Account");

// Account creation
var username = prompt("Please create a Username");
var password = prompt("Please create a Password");

console.log("Thank you! Your account has been created");

// Login
console.log("Please Enter Login Info");
var tryuser = prompt("Username: ");
var trypass = prompt("Password: ");

// Login validation loop
while (username !== tryuser || password !== trypass) {
    console.log("Wrong Password or Username. Please Try Again.");
    tryuser = prompt("Enter your Username");
    trypass = prompt("Enter your Password");
}

console.log("You are Connected");

// Account balance
var balance = 100;
console.log("Your balance is " + balance + " Pesos ");
var q1 = prompt("Would you like to add money to your Account?");

// Adding money to the account
if (q1.toLowerCase() === "yes") {
    var q2 = prompt("How much would you like to Add?");
    balance += Number(q2);
    console.log("Your new balance is " + balance + " Pesos ");
} else {
    console.log("Great");
}

// Burger purchase
var q4 = prompt("Would you like to buy Burger?");
if (q4.toLowerCase() === "yes") {
    console.log("Please choose a burger?");
    var burgertypes = ["Cheese burger", "Meat Burger", "Vegetables Burger"];
    var prices = [10, 20, 25];

    // Displaying burger options
    console.log(" Choice 1: " + burgertypes[0] + " " + prices[0] + " Pesos ");
    console.log(" Choice 2: " + burgertypes[1] + " " + prices[1] + " Pesos ");
    console.log(" Choice 3: " + burgertypes[2] + " " + prices[2] + " Pesos ");

    var q5 = prompt("What is your choice?");

    // Processing the burger order
    if (q5.toLowerCase() === "choice 1") {
        console.log("You have ordered a " + burgertypes[0]);
        console.log("The total of the order is " + prices[0] + " Pesos ");
        balance -= prices[0];
        console.log("You have " + balance + " Pesos left balance");
        
    } else if (q5.toLowerCase() === "choice 2") {
        console.log("You have ordered a " + burgertypes[1]);
        console.log("The total of the order is " + prices[1] + " Pesos ");
        balance -= prices[1];
        console.log("You have " + balance + " Pesos left balance");
        
    } else if (q5.toLowerCase() === "choice 3") {
        console.log("You have ordered a " + burgertypes[2]);
        console.log("The total of the order is " + prices[2] + " Pesos ");
        balance -= prices[2];
        console.log("You have " + balance + " Pesos left balance");
    }
} else {
    console.log("Good Day!");
}


*/