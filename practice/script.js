console.log("welcome to jubair");
fullname = "tony stark";
console.log(fullname);
age = 24;
console.log(age);
x = null;
y = undefined;
isfollow = false;
console.log(isfollow);
j1 = 3;
console.log(j1);
myName = "jubair"; //variable eivabe declare korte hobe(camel case)
console.log(myName);
let urName = "jamal"; //let variable use korte hobe
var age = 12; //use korle same variable er value declare hoye jai eta use  kora jabe nah
console.log(age);
const k = 23; //change hobe nah
{
  let m = 90;
  console.log(m); //block kore oo kora jai
}
//object=collect of data
const student =
  //const er jaigai let oo use kora jabe
  {
    fullname: "jamal",
    age: 12,
    cgpa: 4,
    isPass: true,

    //particular data print korte chaile student.fullName or student["fullName"]
  };
console.log(student["fullname"]);
student.age = student.age + 1; //age change hobe
student["age"] = student["age"] + 1;
console.log(typeof student.age);
let A = 3;
let B = 3;
console.log("A+B=", A + B);
console.log("A=", ++A); //4
console.log("A=", A); //4
console.log("A=", A++); //4
console.log("A=", A); //5
console.log("5==2", A == B); //false
let c = "3";
console.log("3==3", c == B); //string ke number format niye true hobe
console.log("3===3", c === B); //3ta equal strictly check korbe true naki false eikahane convert hobe nah

let con1 = A > B;
let con2 = c > B;
if (con1 && con2) {
  console.log("YES");
} else {
  console.log("NO");
}
let mode = "black";
let color;
if (mode == "black") {
  color = "red";
}
if (mode == "white") {
  color = "BLue";
}
//ternary operator
//condition?true output:false output
let Age = 18;

let result = age > 18 ? "Adut" : "Not adult";
console.log(result);
age > 18 ? console.log("Adult") : console.log("NOTAdult");

//switch statements
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
//alert +prompt
//sob item print hobe console ee
// alert("virus is attached");
// let name=prompt("what is your name");//user input on console
// console.log(name);

// // practice--take a number from the user using prompt and check wheather it is multiple of 5 or not

// let myNumber=prompt("Write your number:");

// myNumber%5===0?console.log(myNumberNumber,"Yes,it is multiple of 5"):console.log(myNumber,"it is multiple of 5");

// started loop

for (let i = 0; i <= 5; i++) {
  console.log("Jubair");
}

//while

var i = 0;
while (i != 7) {
  console.log("While");
  i++;
}
var i = 0;

//do while

do {
  console.log(i);
} while (i < -1);

//for of loop
//array ba string print korbe

let str = "Aust";
i = 0;
for (let i of str) {
  console.log(i);
}
let num = str.length;
console.log(num);

//for in loop
//object print kore
let STudent = {
  id: 20220104123,
  Name: "Abdullah",
  dept: "CSE",
  year: 3.1,
};
for (let key in STudent) {
  console.log("key=", key, " value =", STudent[key]); //key eivabe pass korte hobe
}

//  practice--
//    guess a number from the user and terminate when the guess is correct

// let game=32;
// let myNumber=prompt("guess your number:");
// while(myNumber!=game)
// {
//   myNumber=prompt("wrong guess try another number:");
// }
// console.log(myNumber);

let obj = {
  item: "pen",
  price: 32,
};
console.log(`the cost of ${obj.item} \n is ${obj.price} taka`);
let str3 = "JuBaIr";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
// immutable= orginal variable e change hoi nah
let str4 = "    this is javascript   ";
console.log(str4.trim()); //strating and ending er space gulake kete dei out
// this is javascript
let str5 = "abcdefghijklmnopqrstuvwxyz";
console.log(str5.slice(1, 7)); //bcdefg  //space ee kaj korbe nah
console.log(str4.concat(str5)); //    this is javascript   abcdefghijklmnopqrstuvwxyz
console.log("i am learning coding " + str5 + str4);
console.log(str3.replace("J", "u"));

// let name = prompt("enter your name");
// name = "@" + name + name.length;
// console.log(name);

//   array //

let marks=[12,23,34,56,43];
console.log(marks);
console.log(marks.length);
let person=["jubair","Rabbi","redwan","asif","jakaria"];
console.log();
marks[0]=32;
console.log(marks);
let str7="hello";    //array-mutable--changeable
 str7[0]="j";       //string -unmutable--unchanged
 console.log("unchanged str7[0]-", str7[0]);//not change str7[0] 
 for(let i=0;i<str7.length;i++)
 {
  console.log(str7[i]);
  
 }
 for(let i of person)
 {
    console.log(i.toUpperCase());//person[i]
    
 }
 let sum=0;
 let mark=[85,97,44,37,76,60];
 for(let i of mark)
 {
  sum=sum+i;
 }
 console.log(`the avg mark is ${sum/mark.length}`);
 let items=[250,645,300,900,50 ];

 for(let i=0; i<items.length;i++)
 {
    items[i]=items[i]-items[i]*0.1;
 }
 console.log(items);
let C=0;
 for(let i of items)
 {
  items[C]=i-i*0.1;
  C++;
 }
 console.log(items);
 items.push(90);
 console.log(items);
 items.pop();
 console.log(items);
 console.log(person.toString());//array string hisabe kaj kore
 let one=["a","b","c"];
 let two=["d","e","f"];
 let New=one.concat(two);
 console.log(New);
 one.unshift("strat");//add first
 console.log(one);
 one.shift();//delete 1st
 console.log(one);
 console.log(one.slice(1,3));//2 iteams
one.splice(0,1,"b","c");//(index,index to delete index,add in the deleted index)
console.log(one);
one.splice(1,0,"d","e");//0 delete but 1 index er por d e add koralam
console.log(one);
one.splice(2,1);//2 no index er element ta delete korlam
one.splice(2)//2 no index theke baki sob delete kore dibo
let company=['bloomberg',"micrsoft","uber",'google','ibm','netflix'];
company.shift();
company.splice(2,1,"ola");
company.push('amazon');
console.log(company);

 
 
 

 