// function changeContent() {
//     /    document.getElementById("demo").innerHTML = " mallikarjun";
//     document.getElementById("demo").style.color = "blue";
// }
// function changeStyle() {
//     document.getElementById("test").setAttribute("style", "background-color:red;color:yellow;font-size:30px;text-transform:uppercase;text-align:center;");
// }
// function test() {
//     var PElement = document.createElement("p");
//     var ParaText = document.createTextNode("hai");
//     var result=PElement.appendChild(ParaText);
//     console.log(result);

// }
function task() {
    var PElement = document.createElement("h1");
    var PText = document.createTextNode("hai");
    var TodayTask = document.createElement("h2");
    var PText1 = document.createTextNode("this is arjun");
    var result = PElement.appendChild(PText);
    console.log(result);
    var result1 = TodayTask.appendChild(PText1);
    console.log(result1);
}
var firstName = "hai good evening";
var secondName = "this is arjun";
var result = firstName.concat(secondName);
console.log(result);

var name1 = "devisriprasad";
var result = name1.slice(4, 13);
console.log(result);

var name2 = "malli  karjun";
var result = name2.substring(5, -7);
console.log(result);

var name3 = "bangalore";
var result = name3.substr(5, 9);
console.log(result);


var a = 5;
var b = 7;
var c = 3;
function add() {
    var addTwoNumber = (a + b + c);
    console.log(addTwoNumber);
}









