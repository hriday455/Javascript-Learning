// console.log(2>1)
// console.log(2>=1)
// console.log(null == 0)
// console.log(null >= 0)
// console.log(null <=0 );
// console.log(null > 0);
// console.log(0>0);

/*
reason is that equality check == and comparison > <>= <= work diffrently
Comparison convert null to a number, treating as a 0. That's why (3) null >=0 is true 
(1) null > 0 is false  
*/
// === Strict check
console.log("2"===2)




