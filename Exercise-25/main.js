const mc1 = [1,2 ,3,4]
const  mc2 =[ ...mc1  ,30,39];

console.log(mc2);


// Rest operator

function multiply(...numbrs) {
    return numbrs.reduce((total,num)=> total*num,1);
}

console.log( multiply (20,30,40));

