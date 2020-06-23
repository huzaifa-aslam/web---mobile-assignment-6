// Assignment # 35-38

// 1-

// function dateAndTime(){
//     var date=new Date()
//     document.write(date)
// }
// dateAndTime()

// 2-

// function greeting(fname,lname){
//     document.write(`Welcome ${fname} ${lname}`)
// }
// greeting('Huzaifa','Aslam')

// 3-

// function sum(){
//     var c=+prompt('Enter first number')
//     var d=+prompt("Enter second number")
//     return c+d
// }
// document.write(sum())

// 4-

// function calculator(c,d,f) {
//   var c = +prompt("Enter first number");
//   var d = +prompt("Enter second number");
//   var f = prompt("Enter operator");
//   switch (f) {
//     case "+":
//       return c + d;
//       break;
//     case "-":
//       return c - d;
//       break;
//     case "*":
//       return c * d;
//       break;
//     case "/":
//       return c / d;
//       break;
//       default:
//           return "Try Again"

//   }
//   return c + d;
// }
// document.write(calculator(2,4,"-"));

// 5-

// function square(a,b){
// return Math.pow(a,b)
// }
// document.write(square(2,3))

// 6-
// function factorial(){
//     var inputNumber = prompt('Please enter an integer');
//     var total = 1;

//     for (i = 0; i < inputNumber; i++){
//         total = total * (inputNumber - i);
//     }

//     console.log(inputNumber + '! = ' + total);
// }
// factorial()

// 7-

// function counting(){
//     var a=prompt('enter start number')
//     var b=prompt(`enter end number`)
//     for(var i=a;i<=b;i++){
//         document.write(`${i} <br>`)
//     }
// }
// counting()

// 8-

// function outerFunc(){
//     var a=+prompt('enter the value of base ')
//     var b=+prompt(`enter the value of perb`)
//     var hyp=a*a+b*b;

//  function result(){
//     document.write(Math.sqrt(hyp))
//  }
//  result()
// }
// outerFunc()

// 9-
// function area (widht,height){
//     var cal=widht*height
//     document.write(cal)
// }
// area(2,4)

// 10-

// function palindrom(string) {
//   var str = string;
//   var palindrom="";

//     for(var i=str.length-1;i>=0;i--){
//         palindrom+=str[i]

//     }
//     if(str===palindrom){
//         console.log(`${str} is Palindrome word`)
//     }

// }
// palindrom("civic");

// 11-
function changeCase(str){
    // var a=str.charAt(0)
    console.log(a[0].toUpperCase()+)
    console.log(a)
}
changeCase('huzaifa');
