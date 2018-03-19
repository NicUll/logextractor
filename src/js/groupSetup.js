/**
 * Created by Nic on 2018-03-18.
 */




let ascii = new CharacterGroup("ascii", null, 0);

let specialChars = new CharacterGroup("specialChars", ascii, 1);
let alphanumChars = new CharacterGroup("alphanumChars", ascii, 1);

let bracketChars = new CharacterGroup("bracketChars", specialChars, 2);
let punctuationChars = new CharacterGroup("punctuationChars", specialChars, 2);
let quotationChars = new CharacterGroup("quotationChars", specialChars, 2);
let otherChars = new CharacterGroup("otherChars", specialChars, 2);

let alphaChars = new CharacterGroup("alphaChars", alphanumChars, 2);
let numChars = new CharacterGroup("numChars", alphanumChars, 2);

let upperAlphaChars = new CharacterGroup("upperAlphaChars", alphaChars, 3);
let lowerAlphaChars = new CharacterGroup("lowerAlphaChars", alphaChars, 3);

let charMap = {}

function populateCharsList(startInd, endInd, charGroup, weight) {
    for(let i=startInd; endInd+1; i++) {
        let charValue = String.fromCharCode(i);
        charMap[charValue] = new characterGroup(charValue, charGroup, weight);
    }
}

populateCharsList(65,90,upperAlphaChars, 4); //A-Z
populateCharsList(97, 122,lowerAlphaChars, 4 );//a-z
populateCharsList(48, 57,numChars, 4);


for(let i=65;i<91;i++){
    let charValue = String.fromCharCode(i);
    charMap[charValue] = new CharacterGroup(charValue, upperAlphaChars, 4);
}

for(let i=97;i<123;i++){
    let charValue = String.fromCharCode(i);
    charMap[charValue] = new CharacterGroup(charValue, lowerAlphaChars, 4);
}

for(let i=48;i<58;i++){
    let charValue = String.fromCharCode(i)

}



console.log(charMap);







