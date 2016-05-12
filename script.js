//array with list of correct answers
var correctAnswers = ["Sacramento", "Kentucky", "Aleutian", "2", "Michigan"];
var NUM_QUESTIONS = correctAnswers.length;

//function to check the answers
$(document).ready(function() {
	$("button").click(function() {
		$("#results").html('');
		var numQuestionsAnswered = $("input:checked").length;
		if(numQuestionsAnswered < NUM_QUESTIONS) {
			alert("Please answer all questions!");
			return;
		}
		var numCorrectAnswers = 0;
		for(var i = 0; i < NUM_QUESTIONS; i++) {
			var questionNumber = i + 1;
			var questionName = "question" + questionNumber;
			var userAnswer = $("input[name=" + questionName + "]:checked").val();
			if(userAnswer === correctAnswers[i]) {
				addFeedback("<p class='right'>You got question " + questionNumber + " correct!</p>");
				numCorrectAnswers++;
			} else {
				addFeedback("<p class='wrong'>You got question " + questionNumber + " wrong! The answer is: " + correctAnswers[i] + ".</p>");
			}
			console.log(numCorrectAnswers);
		}
		if(numCorrectAnswers >= 4) {
			addFeedback("<p>Your geographical knowledge is excellent!</p>");
		} else if(numCorrectAnswers >= 2) {
			addFeedback("<p>Your knowledge is pretty good!</p>");
		} else {
			addFeedback("<p>You need to work on your geographical knowledge.</p>");
		}
	});
});

function addFeedback(html) {
	$("#results").append(html);
}
