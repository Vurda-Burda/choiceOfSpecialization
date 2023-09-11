let testArray1 = ["hello", "2", "world", ":-)"];
let testArray2 = ["1234", "1567", "-2", "computer science"];
let testArray3 = ["Russia", "Denmark", "Kazan"];

function createNewArrayWithLengthElementThree(array) {
    newArray = [];
    for (let value of array) {
        if (value.length <= 3) {
            newArray.push(value);
        };
    };
    return newArray;
};

let res1 = createNewArrayWithLengthElementThree(testArray1);
let res2 = createNewArrayWithLengthElementThree(testArray2);
let res3 = createNewArrayWithLengthElementThree(testArray3);

console.log(`${res1} \n ${res2} \n ${res3}`);