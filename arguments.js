function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}

const result = add(3, 5, 8, 12);
console.log(result);