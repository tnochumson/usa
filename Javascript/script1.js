var correctAnswers = ["Sacramento","Kentucky","Bow and arrow","Dr. Soong","Raichu"]

$("button").click(function() {
	for(var i = 0; i < correctAnswers.length; i++) {
		var questionNumber = i + 1;
		var questionName = "question" + questionNumber;
		var userAnswer = $("input[name=" + questionName + "]:checked").val();
	if(userAnswer == correctAnswers[i]) {
		$("#results").append("<p class='right'>You got question " + questionNumber + "correct!</p>");

	}	else {
		$("#results").append("<p class='wrong'>You got question " + questionNumber + "wrong!</p>");
	}
	while(input != correctAnswers[i]) {
		input = prompt("That answer is incorrect. Try again.");
	}
}


});