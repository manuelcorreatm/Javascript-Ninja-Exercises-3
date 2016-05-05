function makeHashtag() {
    var parag = document.getElementById("text");
    var target = document.getElementById("word").value;
    var regexpr = new RegExp("\\b" + target + "\\b", "ig");
    parag.innerHTML = parag.textContent.replace(regexpr, function (word) {
        return "<a href='http://twitter.com/search?q=%23"+word+"'>" + "#" + word + "</a>";
    });
}

var btn = document.getElementById("btn");
btn.addEventListener("click", makeHashtag, false);