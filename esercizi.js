function reduce(arrayToAggregate, aggregationFunction, startingElement){
    let result;
    let startingIndex;
    if (startingElement) {
        result = startingElement;
        startingIndex = 0;
    } else {
        result = arrayToAggregate[0]
        startingIndex = 1;
    }
    for (let i = startingIndex; i < arrayToAggregate.length; i++) {
        const element = arrayToAggregate[i];
        result = aggregationFunction(result, element, i, arrayToAggregate);
    }   
    return result;
}

function addString(previous, current, index){
    // if (index % 2 === 0) {
    //     if (!previous[0]) {
    //         previous = "";
    //     }

    //     previous = previous + current;
    // } else{
    //     if (!previous[0]) {
    //         previous = "";
    //     }
    //     previous = previous + " ";
    // }

    // return previous;

    if (index % 2 !== 0) {
        return previous;
    }else {
        return previous + " " + current;
    }
}

let testArray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"];

console.log(testArray3.reduce(addString));

console.log(testArray3.reduce((p, c, i) => i % 2 !== 0 ? p : p + " " + c));

// dato un array di numeri, reduce che prende il maggiore di tutti;
// reduce che prende il minore dei negativi;
// somma dei pari;
// dato un array di stringhe, reduce che restituisce array di vocali;
// stringa di consonanti senza ripetizioni;

// map che cambia maiuscole in minuscole e viceversa, converti in reduce;
// filter che tenga solo le stringhe che contengono b, converti in reduce;

// array.some();
// array.every();

let nuovaStringa = "pippo";

function checkVowels(string){
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.some((v) => string.includes(v));
}

function arrayOfVowels(string) {
    let Array = [...string];

    let vowelsArray = Array.filter(checkVowels);

    return vowelsArray;
}

console.log(arrayOfVowels(nuovaStringa));



let athlete1 = {name: "giovanni", surname:"landi", position: 2}
let athlete2 = {name: "lorena", surname:"landi", position: 2}
let athlete3 = {name: "pippo", surname:"barbigli", position: 1}
let athlete4 = {name: "simona", surname:"perri", position: 3}
let athlete5 = {name: "elmo", surname:"recalcati", position: 2}

let athletes = [athlete1, athlete2, athlete3, athlete4, athlete5];



//console.log([...athletes]);


//athletes.sort((s1, s2)=> s1.position - s2.position)

function compareBySurname(stud1, stud2) {
    
}

function compareByPosition(stud1, stud2) {
    
}

function compareByPositionPlus(stud1, stud2) {
    if (stud1.position > stud2.position) {
        return 1;
    }

    if (stud1.position < stud2.position) {
        return -1;
    }

    if (stud1.position === stud2.position) {
        if (stud1.surname.localeCompare(stud2.surname) !== 0) {
            return stud1.surname.localeCompare(stud2.surname);
        }
        else{
            return stud1.name.localeCompare(stud2.name);
        }
    }
}

console.log(athletes.sort(compareByPositionPlus));


let testArray1 = ["La", "Vergogna", "Casa", "Dannazione", "Ha", "Pippo", "Preso", "Secchio", "Fuoco"];

function SwapCase(string) {
    const firstChar = string[0];
    const firstCharLower = firstChar.toLowerCase();
    const remainingString = string.substring(1);
    const remainingStringUpper = remainingString.toUpperCase();

    return firstCharLower + remainingStringUpper;
}

console.log(testArray1.map(SwapCase));

console.log(testArray1.map((s) => s[0].toLowerCase() + s.substring(1).toUpperCase()));

console.log(testArray1.reduce((p, c) => [...p, SwapCase(c)], []));

function filterChar(stringToCheck) {
    // if(string.includes("r")){
    //     return true;
    // } else {
    //     return false;
    // }

    return (string) => s.toLowerCase().includes(stringToCheck)
}



console.log(filterChar("pippo", "r"));

//console.log(testArray1.filter(filterChar));

console.log(testArray1.filter((s) => filterChar(s, "p")));

//console.log(testArray1.reduce((p,c) => filterChar(c) ? [...p, c] : p, []));







