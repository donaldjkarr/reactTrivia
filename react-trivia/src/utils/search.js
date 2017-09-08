import axios from 'axios';

export default function ajax() {
    var queryURL = "https://opentdb.com/api.php?amount=1&type=multiple";
    return axios.get(queryURL)
    .then(function(response) {
        console.log(response.data.results[0]);
        var correctAnswer = [];
	    var questions = [];
        var correct = response.data.results[0].correct_answer;

	    correctAnswer.push(correct);
	    questions.push(correct);

        	var other1 = response.data.results[0].incorrect_answers[0];
	        var other2 = response.data.results[0].incorrect_answers[1];
	        var other3 = response.data.results[0].incorrect_answers[2];

	        questions.push(other1, other2, other3);

            function randomize() {
                for (var i = questions.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = questions[i];
                    questions[i] = questions[j];
                    questions[j] = temp;
                }
                return questions;
            }

            randomize();
        	
            console.log(questions);
			console.log(correctAnswer);
    });
};
