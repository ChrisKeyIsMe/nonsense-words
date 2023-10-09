const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
//const random = Math.floor(Math.random() * 26);

//function to export to index.html
const makeWord = () => {
    let firstLetter;
    let secondLetter;
    let thirdLetter;
    let fourthLetter;

//first and third letter must always be consonants and second must always be a vowel. Random number generator to choose a random letter.
    let format = Math.floor(Math.random() * 2);
    if (format === 0){
        firstLetter = consonants[Math.floor(Math.random() * 21)];
        secondLetter = vowels[Math.floor(Math.random() * 4)];
        thirdLetter = consonants[Math.floor(Math.random() * 21)];
        fourthLetter = consonants[Math.floor(Math.random() * 21)];
    } else {
        firstLetter = consonants[Math.floor(Math.random() * 21)];
        secondLetter = consonants[Math.floor(Math.random() * 21)];
        thirdLetter = vowels[Math.floor(Math.random() * 4)];
        fourthLetter = consonants[Math.floor(Math.random() * 21)];
    }
//send the letters to index.html
// avoiding naughty words!
let wordTest = firstLetter + secondLetter + thirdLetter + fourthLetter;
console.log(`Word generated: ${wordTest}`);
// digraph + VC
if (wordTest == "shag" || wordTest == "shat" || wordTest == "sheg" || wordTest == "shet" || wordTest == "shid" || wordTest == "shit" || wordTest == "chef" || wordTest == "chav" || wordTest == "thuc" || wordTest == "thug") {
    console.log("Naughty word detected! Changing...");
    document.getElementById("firstletter").innerHTML = "c";
    document.getElementById("secondletter").innerHTML = "r";
    document.getElementById("thirdletter").innerHTML = "i";
    document.getElementById("fourthletter").innerHTML = "s";
} 
// cv + digraph
else if (wordTest == "wash" || wordTest == "yesh" || wordTest == "bish" || wordTest == "pish" || wordTest == "wosh" || wordTest == "bush" || wordTest == "push" || wordTest == "wush" || wordTest == "wach" || wordTest == "bich" || wordTest == "woch" || wordTest == "fuch" || wordTest == "deth" || wordTest == "meth" || wordTest == "bith" || wordTest == "pith" || wordTest == "duth" || wordTest == "futh" || wordTest == "muth" || wordTest == "mong" || wordTest == "dung") {
    console.log("Naughty word detected! Changing...");
    document.getElementById("firstletter").innerHTML = "c";
    document.getElementById("secondletter").innerHTML = "r";
    document.getElementById("thirdletter").innerHTML = "i";
    document.getElementById("fourthletter").innerHTML = "s";
} 
// CCVC
else if (wordTest == "blac" || wordTest == "blak" || wordTest == "blal" || wordTest == "blec" || wordTest == "blek" || wordTest == "blel" || wordTest == "blic" || wordTest == "blik" || wordTest == "blil" || wordTest == "blol" || wordTest == "blud" || wordTest == "blul" || wordTest == "clal" || wordTest == "clel" || wordTest == "clil" || wordTest == "clit" || wordTest == "clol" || wordTest == "clul" || wordTest == "flal" || wordTest == "flel" || wordTest == "flem" || wordTest == "flil" || wordTest == "flog" || wordTest == "flol" || wordTest == "fluc" || wordTest == "flug" || wordTest == "fluk" || wordTest == "flul" || wordTest == "glal" || wordTest == "glel" || wordTest == "glil" || wordTest == "glol" || wordTest == "glul" || wordTest == "plal" || wordTest == "pleb" || wordTest == "plel" || wordTest == "plil" || wordTest == "plol" || wordTest == "plul" || wordTest == "brat" || wordTest == "brit" || wordTest == "bruv" || wordTest == "crap" || wordTest == "croc" || wordTest == "crod" || wordTest == "crok" || wordTest == "crud" || wordTest == "crup" || wordTest == "crut" || wordTest == "drug" || wordTest == "frac" || wordTest == "frak" || wordTest == "frat" || wordTest == "frec" || wordTest == "frek" || wordTest == "fric" || wordTest == "frig" || wordTest == "frik" || wordTest == "fruc" || wordTest == "frug" || wordTest == "fruk" || wordTest == "prat" || wordTest == "pric" || wordTest == "prik" || wordTest == "tran" || wordTest == "skat" || wordTest == "skoc" || wordTest == "skok" || wordTest == "skuc" || wordTest == "skuk" || wordTest == "skum" || wordTest == "slag" || wordTest == "slal" || wordTest == "slap" || wordTest == "slas" || wordTest == "sleg" || wordTest == "slel" || wordTest == "slep" || wordTest == "sles" || wordTest == "slil" || wordTest == "slis" || wordTest == "slob" || wordTest == "slol" || wordTest == "slos" || wordTest == "slul" || wordTest == "slum" || wordTest == "smac" || wordTest == "smag" || wordTest == "smam" || wordTest == "smag" || wordTest == "smec" || wordTest == "smeg" || wordTest == "smek" || wordTest == "smeg" || wordTest == "smem" || wordTest == "smen" || wordTest == "smim" || wordTest == "smin" || wordTest == "smom" || wordTest == "smon" || wordTest == "smum" || wordTest == "smun" || wordTest == "smut" || wordTest == "snam" || wordTest == "snan" || wordTest == "snas" || wordTest == "snem" || wordTest == "snen" || wordTest == "snes" || wordTest == "snim" || wordTest == "snin" || wordTest == "snis" || wordTest == "snog") {
    console.log("Naughty word detected! Changing...");
    document.getElementById("firstletter").innerHTML = "c";
    document.getElementById("secondletter").innerHTML = "r";
    document.getElementById("thirdletter").innerHTML = "i";
    document.getElementById("fourthletter").innerHTML = "s";
}
 // CCVC continued
else if (wordTest == "snom" || wordTest == "snon" || wordTest == "snos" || wordTest == "snot" || wordTest == "snum" || wordTest == "snun" || wordTest == "snus" || wordTest == "spap" || wordTest == "spas" || wordTest == "spat" || wordTest == "spem" || wordTest == "spep" || wordTest == "spes" || wordTest == "spip" || wordTest == "spis" || wordTest == "spit" || wordTest == "spop" || wordTest == "spos" || wordTest == "spum" || wordTest == "spup" || wordTest == "spus" || wordTest == "stab" || wordTest == "steb" || wordTest == "swan" || wordTest == "swas" || wordTest == "swes" || wordTest == "swis" || wordTest == "swos" || wordTest == "swus" || wordTest == "twac" || wordTest == "twat" || wordTest == "twaz" || wordTest == "twet" || wordTest == "twid" || wordTest == "twit" || wordTest == "twos" || wordTest == "twot" || wordTest == "twut") {
    console.log("Naughty word detected! Changing...");
    document.getElementById("firstletter").innerHTML = "c";
    document.getElementById("secondletter").innerHTML = "r";
    document.getElementById("thirdletter").innerHTML = "i";
    document.getElementById("fourthletter").innerHTML = "s";
}
// CVCC
else if (wordTest == "want" || wordTest == "cint" || wordTest == "cunt" || wordTest == "kunt" || wordTest == "wand" || wordTest == "find" || wordTest == "kind" || wordTest == "mosk" || wordTest == "calf" || wordTest == "half" || wordTest == "dilf" || wordTest == "milf" || wordTest == "cast" || wordTest == "fast" || wordTest == "last" || wordTest == "mast" || wordTest == "past" || wordTest == "gist" || wordTest == "pist" || wordTest == "host" || wordTest == "most" || wordTest == "post" || wordTest == "lust" || wordTest == "daft" || wordTest == "raft" || wordTest == "wimp" || wordTest == "cump" || wordTest == "dump" || wordTest == "kump" || wordTest == "halt" || wordTest == "malt" || wordTest == "salt" || wordTest == "balk" || wordTest == "falk" || wordTest == "folk" || wordTest == "yolk" || wordTest == "fulk" || wordTest == "fank" || wordTest == "wank" || wordTest == "wenk" || wordTest == "fink" || wordTest == "cunk" || wordTest == "funk" || wordTest == "wunk" || wordTest == "bald" || wordTest == "mild" || wordTest == "wild" || wordTest == "bold" || wordTest == "cold" || wordTest == "fold" || wordTest == "gold" || wordTest == "cact" || wordTest == "kact" || wordTest == "fect" || wordTest == "dict" || wordTest == "lict" || wordTest == "coct" || wordTest == "foct" || wordTest == "koct" || wordTest == "cuct" || wordTest == "fuct" || wordTest == "suct" || wordTest == "vuct" || wordTest == "kokt" || wordTest == "cokt" || wordTest == "kukt" || wordTest == "cukt" || wordTest == "sukt" || wordTest == "fukt" || wordTest == "balm" || wordTest == "calm" || wordTest == "palm" || wordTest == "culm" || wordTest == "kulm" || wordTest == "halp" || wordTest == "tits" || wordTest == "cumd" || wordTest == "fuck" || wordTest == "fucc" || wordTest == "suck" || wordTest == "succ") {
    console.log("Naughty word detected! Changing...");
    document.getElementById("firstletter").innerHTML = "c";
    document.getElementById("secondletter").innerHTML = "r";
    document.getElementById("thirdletter").innerHTML = "i";
    document.getElementById("fourthletter").innerHTML = "s";
}
else {
    document.getElementById("firstletter").innerHTML = firstLetter;
    document.getElementById("secondletter").innerHTML = secondLetter;
    document.getElementById("thirdletter").innerHTML = thirdLetter;
    document.getElementById("fourthletter").innerHTML = fourthLetter;
    }
};

const makePolyWord = () => {
    let firstLetter;
    let secondLetter;
    let thirdLetter;
    let fourthLetter;
    let format = Math.floor(Math.random() * 2);
    if(format === 0){
        firstLetter = consonants[Math.floor(Math.random() * 21)];
        secondLetter = vowels[Math.floor(Math.random() * 4)];
        thirdLetter = consonants[Math.floor(Math.random() * 21)];
        fourthLetter = vowels[Math.floor(Math.random() * 4)];
    } else {
        firstLetter = vowels[Math.floor(Math.random() * 4)];
        secondLetter = consonants[Math.floor(Math.random() * 21)];
        thirdLetter = vowels[Math.floor(Math.random() * 4)];
        fourthLetter = consonants[Math.floor(Math.random() * 21)];
    }
    // avoiding naughty words
    let wordTest = firstLetter + secondLetter + thirdLetter + fourthLetter;
    console.log(`Word generated: ${wordTest}`);
    if (wordTest == "tits" || wordTest == "coke" || wordTest == "fuku" || wordTest == "fucu" || wordTest == "fuko" || wordTest == "fuco" || wordTest == "fuka" || wordTest == "fuca") {
        console.log("Whoops, caught a bad word. Changing...");
        firstLetter = "h";
        secondLetter = "a";
        thirdLetter = "h";
        fourthLetter = "a";
    } else {
        document.getElementById("firstletter").innerHTML = firstLetter;
        document.getElementById("secondletter").innerHTML = secondLetter;
        document.getElementById("thirdletter").innerHTML = thirdLetter;
        document.getElementById("fourthletter").innerHTML = fourthLetter;
    }
};