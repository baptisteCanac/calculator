console.log('Hello World');
let firstNumberSelected = 0;
let secondNumberSelected = 0;
let result = "";

function printResult(){
	document.getElementById("result").innerHTML = result;
	console.log(result);
}
function oneClicked(){
	result = result + "1";
	printResult();
}
function twoClicked(){
	result = result + "2";
	printResult();
}
function threeClicked(){
	result = result + "3";
	printResult();
}
function fourClicked(){
	result = result + "4";
	printResult();
}
function fiveClicked(){
	result = result + "5";
	printResult();
}
function sixClicked(){
	result = result + "6";
	printResult();
}
function sevenClicked(){
	result = result + "7";
	printResult();
}
function heightClicked(){
	result = result + "8";
	printResult();
}
function nineClicked(){
	result = result + "9";
	printResult();
}
function zeroClicked(){
	result = result + "0";
	printResult();
}
function pointClicked(){
	result = result + ".";
	printResult();
}
function cClicked(){
	result = "";
	printResult();
}
function delClicked(){
	result = "";
	printResult();
}
function divideClicked(){
	result = result + "/";
	printResult();
}
function multipliedClicked(){
	result = result + "*";
	printResult();
}
function addClicked(){
	result = result + '+';
	printResult();
}
function moinsClicked(){
	result = result + '-';
	printResult();
}
function equalClicked(){
	printResult()
}