
        
        
        
        //Operators

        let x = 15;
let y = 5;
 console.log("x+y =" ,x+y);  // x+=y
//  console.log(x+=y); 

 console.log(x-y);       //x-=y or x-=1
//  console.log(x-=y); 

 console.log(x*y);      //x*=y  or x*=2
//  console.log(x*=y); 

 console.log(x/y);    //x/=y  or x/=3
//  console.log(x/=y); 

 console.log(x%y);     //x%=y  0r x%=10
//  console.log(x%=y); 

 console.log(x**y); // x power y like 15^5
// x**=2


//          <--------- unary operators ---------->

console.log(x--); // print then decrease ...x = 15 print and new value of x is 14
// output is 15

console.log(x++); // print then increase
// x is 14 now then is prints and increase by one  so ... now new value of x is 15
//output is 14

console.log(--x);// decrease then print
// x is 15  now  then decrease and print 14
// new value of x is 14

console.log(++x);// increase then print
// x is 14 now ... increase and print 15

//       <-----comparision operators---------->      













        let a = prompt("what's your age ??");
        a = Number.parseInt(a) // because in js all datatypes are consider as a string 
        //that's by we are converting (a ) in a number as a integer

        if (a < 0 || a == 0) {
            alert("you are not aligible ");
        }

        else if (a < 12) {
            alert("you are not aligible you are a kidd");

        }
        else if (a < 18) {
            alert("you are not aligible but you are not kidd....");

        }
        else if (a == 18 || a < 60) {
            alert("you are aligible for vote");

        }

        else if (a > 60) {
            alert("you are old now.... but aligible for vote ");

        }
        else {
            alert("undifined this is unvailid");

        }
   