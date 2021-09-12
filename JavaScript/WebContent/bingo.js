window.onload = initAll;

function initAll() {
	if (document.getElementById) {
		document.getElementById("pick").onclick = displayNumber;
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function displayNumber() {
    var number = generateNumber();
    
    document.getElementById("Number").innerHTML = "The next BINGO number is: " + number;

    number[0] + " - " + number[1];
}

function generateNumber() {
   var columnLabel = new Array("B", "I", "N", "G", "O");
   var columnIndex = Math.floor(Math.random() * 5);
   var newNum = Math.floor(math.random() * 15) + 1 + (columnIndex * 15);
   
   return new Array(columnLabel[columnIndex], newNum);


}
