var regexpr1 = /^(January|February|March|April|May|June|July|Agoust|September|November|December){1} \d{2}, \d{4}$/;
var regexpr2 = /^(\d+[a-zA-Z])$|^([a-zA-Z]\d+)$/;
var regexpr3 = /^[a-zA-Z]+(.java|.cpp|.txt){1}$/;
var regexpr4 = /^(.)(.).\2\1$/;
var regexpr5 = /\b[b-yB-Y]+\b/g;
var regexpr6 = /<(\w+)>(.+?)<\/\1>/g;

console.log(regexpr1.test("September 29, 1972"));
console.log(regexpr2.test("A52"));
console.log(regexpr3.test("newReport.txt"));
console.log(regexpr4.test("_1a1_"));
console.log("Bee zapp Crow Eagle Zorro  mouse Ape  you".match(regexpr5));
console.log("Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.".match(regexpr6));