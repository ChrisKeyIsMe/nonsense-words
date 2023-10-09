//consonants and vowels are separated
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
//const random = Math.floor(Math.random() * 26);

//function to export to index.html
const makeWord = () => {
//first and third letter must always be consonants and second must always be a vowel. Random number generator to choose a random letter.
let firstLetter = consonants[Math.floor(Math.random() * 21)];
let secondLetter = vowels[Math.floor(Math.random() * 4)];
let thirdLetter = consonants[Math.floor(Math.random() * 21)];
let wordTest = firstLetter + secondLetter + thirdLetter;
console.log(`Word generated: ${wordTest}`);

    //avoiding naughty words!
    //short a words
    if(wordTest == "fac" || wordTest == "fag" || wordTest == "gag" || wordTest == "hag" || wordTest == "fak" || wordTest == "fap" || wordTest == "was"){
        console.log("Naughty word detected! Changing...");
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    } 
    // short e words
    else if (wordTest == "fec" || wordTest == "fek") {
        console.log("Naughty word detected! Changing...");
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    } 
    // short i words
    else if (wordTest == "dic" || wordTest == "yid" || wordTest == "cig" || wordTest == "nig" || wordTest == "pig" || wordTest == "cil" || wordTest == "kil" || wordTest == "gin" || wordTest == "sin" || wordTest == "pis" || wordTest == "git" || wordTest == "hiv" || wordTest == "jiz" || wordTest == "piz") {
        console.log("Naughty word detected! Changing...");
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    }
    // short o words
    else if (wordTest == "gob" || wordTest == "nob" || wordTest == "coc" || wordTest == "foc" || wordTest == "koc" || wordTest == "god" || wordTest == "sod" || wordTest == "cok" || wordTest == "fok" || wordTest == "kok") {
        console.log("Naughty word detected! Changing...");
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    }
    // short u words
    else if (wordTest == "cuc" || wordTest == "fuc" || wordTest == "kuc" || wordTest == "suc" || wordTest == "vuc" || wordTest == "fuf" || wordTest == "fug" || wordTest == "cuk" || wordTest == "fuk" || wordTest == "kuk" || wordTest == "suk" || wordTest == "vuk" || wordTest == "bum" || wordTest == "cum" || wordTest == "dum" || wordTest == "kum" || wordTest == "qum" || wordTest == "rum" || wordTest == "cun" || wordTest == "kun" || wordTest == "cus" || wordTest == "kus" || wordTest == "wus" || wordTest == "fut") {
        console.log("Naughty word detected! Changing...");
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    }

//send the letters to index.html
//alert(firstLetter + secondLetter + thirdLetter);
document.getElementById("firstletter").innerHTML = firstLetter;
document.getElementById("secondletter").innerHTML = secondLetter;
document.getElementById("thirdletter").innerHTML = thirdLetter;
} 