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



