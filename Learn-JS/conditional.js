
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
   