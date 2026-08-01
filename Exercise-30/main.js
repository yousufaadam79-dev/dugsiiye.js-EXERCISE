function prameter(a,b , callback) {
    return callback(a,b)
}

function add(a,b) {
    return a * b;
}

function substract(a,b) {
    return a / b
}

console.log("addition:" ,prameter  (20 ,40 , add));

console.log("subtraction:" , prameter ( 99,9 ,substract));
