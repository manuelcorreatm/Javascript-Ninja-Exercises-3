function matchPalindromes(text) {
    var words = text.split(" ");
    var regs = [];
    for (var i = 0; i < words.length; i++) {
        var length = words[i].length;
        var reString = "";
        for (var j = 1; j <= length; j++) {
            if (j<=(length/2)) {
                reString += "(.)";
            } else if (j<(length/2)+1) {
                reString += "(.)";
            } else {
                reString += "\\" + (Math.abs(j - length - 1));
            }
        }
        //Execute the regexpr
        regexpr = new RegExp(reString);
        if (words[i].match(regexpr)) {
            regs.push(words[i].match(regexpr)[0]);
        }
        
    }
    return regs.join(" ");;
}

console.log(matchPalindromes("lalala oqjdq unoonu give me racecar on the flylf"));