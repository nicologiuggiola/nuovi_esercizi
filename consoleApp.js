const text = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso."
// const text2 = "L'Ateniese Milziade.";

/// statistiche testo
function statsParagraph(string) {
    let counterChar = countChar(string);
    let counterWords = countWords(string);
    // let occurrencyWords = wordOccurrency(string);
    // let occurrencyChar = charOccurrency(string)
    let allStats = [];
    allStats.push("i caratteri contenuti in questo testo sono: " + counterChar);
    allStats.push("le parole contenute in questo testo sono: " + counterWords);
    return allStats;
}
console.log(statsParagraph(text))
function countChar(string) {
    let character = 0
    character += string.length;
    return character
}
console.log(countChar(text));

function countWords(string) {
    let removeDot = string.replace(".", " ");

    let removeDoubleDot = string.replace(":", " ");

    let removeComma = string.replace(",", " ");

    let removeSemicolon = string.replace(";", " ");

    let removeApostrophe = string.replace("'", " ");

    return string.split(" ").length

}
console.log(countWords(text));


const searchWord = "Milziade";

function wordOccurrency(string) {
    let count = 0;
    let indexOfFirst = string.indexOf(searchWord);
    while (indexOfFirst !== -1) {
        count++;
        indexOfFirst = string.indexOf(searchWord, indexOfFirst + 1);
    }

    return count
}

console.log("la parola " + searchWord + " è ripetuta " + wordOccurrency(text) + " volte");

let searchChar = "e";

function charOccurrency(string) {
    let count = 0;
    let indexOfFirst = string.indexOf(searchChar);
    while (indexOfFirst !== -1) {
        count++;
        indexOfFirst = string.indexOf(searchChar, indexOfFirst + 1);
    }

    return count
}

console.log("il carattere " + searchChar + " è ripetuto: " + charOccurrency(text) + " volte");

/// funzione di ricerca
function researchWord(text,wordToSearch){
    const arrayOfIndex = [];
    let textToSearch = text
    let index = 0
    while (true) {
        index = textToSearch.toLowerCase().indexOf(wordToSearch.toLowerCase())
        if (index === -1) {
            break;
        }else {
            arrayOfIndex.push(index);
            textToSearch=textToSearch.substring(index + wordToSearch.length);
        }
    }
    return arrayOfIndex
}

console.log(researchWord(text, "Milziade"));



/// prompt attivato da tasto che attiva la funzione di ricerca


function startSearch() {
    const wordToSearch = prompt("Inserisci la parola da cercare")
    const arrayOfIndex = researchWord(text, wordToSearch) 
    alert("le occorrenze sono " + arrayOfIndex.length)
}
let element = document.getElementById("stats-paragraph");

function writeStatsOfParagraph(string) {
    element = statsParagraph(text);
    return element
}
console.log(writeStatsOfParagraph(text));