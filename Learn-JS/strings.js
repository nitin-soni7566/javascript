

    //there are two ways to creat string like
    // 1. "" ;
    // 2. '' ;

    // How to Get Character of Specific Position using JavaScript?


    let p = 0;
    let str = "Hello";

    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
      console.log(i);
      if (i == p) {
        console.log(str[i]);
      }
    }

    // How to replace multiple spaces with single space in JavaScript ?
    let str1 = " hiii    i'm     pushpanjali       soni";
    let newstr = str1.trim().split(/[\s,\t,\n]+/).join(' ');

    console.log(newstr);

    // How to replace all occurrences of a string in JavaScript?

    let str2 = "hiii hiii i'm pushpanjali soni soni";
    let newstr2;

