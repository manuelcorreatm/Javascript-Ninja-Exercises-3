function shiftCharacterByOne(word) {
    var regexpr = /[a-z0-9]/ig;

    return word.replace(regexpr, function (letter) {
        letter = String.fromCharCode(letter.charCodeAt(0) + 1);
        switch (letter) {
            case "{": return "a";
            case "[": return "A";
            case ":": return "0";
            default: return letter;
        }
        
    });
}

console.log(shiftCharacterByOne("aBc"));
console.log(shiftCharacterByOne("xyz"));
console.log(shiftCharacterByOne("aK89"));