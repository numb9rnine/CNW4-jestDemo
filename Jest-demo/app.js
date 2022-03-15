// const add =(num1, num2 )=> {
//     return num1 + num2;
// };

// const myArray =["Steve","john", "Dave"];

// module.exports = {add, myArray};


// add
let add = (num1, num2) => {
    return num1 + num2;
};

// TRUE OR FALSE
const addTrue = (num1, num2) => {
    if (num1 === num2){
        return true;
    } else{
        return false;
}
}

// array
const myArray = ["Dave", "Bob", "Ste"];

// null
function isEmpty(val) {
    return (val === undefined || val == null || val.length <=0) ? true : false ;
}
// create an Object
const createObject = () => {
    return { firstName: 'Cherrelle', Age: 22 };
};
// get items
const getItems = (array) => {
    return array.filter((e) => e.length >= 6);
};
// Num to string
const convertNumberToString = (num) => {
    return num.toString();
};
// order
const getPlanetFromOrder = (order) => {
    const planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune',
    ];
    return planets[order - 1];
};

const countAmountOfPresentStudents = (attendanceArray) => {
    return attendanceArray.filter((attendance) => attendance === true).length;
};

const squareAndConcat = (digits) => {
    const digitString = digits.toString().split('');
    const result = digitString.reduce((prev, cur) => {
        prev += cur ** 2;
        return prev;
    }, '');
    return parseInt(result);
};

const convertYearToCentury = (year) => {
    return Math.floor(year / 100);
};

const binary = (binaryArray) => {
    return binaryArray.reverse().reduce((prev, curr, index) => {
        prev += curr === 1 ? 2 ** index : 0;
        return prev;
    }, 0);
};



module.exports = {
add,
addTrue,
myArray, 
isEmpty, 
createObject,
getItems,
convertNumberToString,
getPlanetFromOrder,
countAmountOfPresentStudents,
squareAndConcat,
convertYearToCentury,
binary
};
