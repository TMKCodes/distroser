Array.prototype.insert = function(index) {
    index = Math.min(index, this.length);
    arguments.length > 1
        && this.splice.apply(this, [index, 0].concat([].pop.call(arguments)))
        && this.insert.apply(this, arguments);
    return this;
};

(function($) {
	$.createWithID = function(tag, id) {
		var element = document.createElement(tag.toLowerCase());
		if(typeof(id) != "undefined") element.id = id;
		return $(element);
	}
	$.createCheckboxInput = function(id, className, name, text, value) {
		var label = document.createElement("label");
		var input = document.createElement("input");
		input.type = "checkbox";
		if(typeof(id) != "undefined") input.id = id;
		if(typeof(className) != "undefined") input.className = className;
		if(typeof(name) != "undefined") input.name = name;
		if(typeof(value) != "undefined") input.value = value;
		label.appendChild(input);
		if(typeof(text) != "undefined") {
			var text = document.createTextNode(text);
			label.appendChild(text);
		}
		return $(label);
	}
	$.createSubmit = function(id, className, value) {
		var input = document.createElement("input");
		input.type = "submit";
		if(typeof(id) != "undefined") input.id = id;
		if(typeof(className) != "undefined") input.className = className;
		if(typeof(value) != "undefined") input.value = value;
		return $(input);
	}
}(jQuery));

var index = 0;
var results = [];
var questions;

function LoadQuestion(question) {
	$("#selection").empty();
	$("#selection").append($.createWithID("h2", "question-header"));
	$("#question-header").text(question.question);
	$("#selection").append($.createWithID("form", "answers"));
	for(var x = 0; x < question.answers.length; x++) {
		var answerID = question.answers[x].answer.replace(/[^a-ä0-9]/gi, '_');
		$("#answers").append($.createCheckboxInput(answerID, "answer_inputs", "answers", question.answers[x].answer, question.answers[x].answer));
	}
	$("#answers").append($.createSubmit("answer-submit", "", "Seuraava"));
	$("#answer-submit").click(function(evt) {
		evt.preventDefault();
		var answers = [];
		$(".answer_inputs").each(function() {
			if($(this).prop("checked") == true) {
				answers.push($(this).prop("id"));
			}
		});
		if(answers.length > 0) {
			var result = { question : $("#question-header").text(), answers : answers };
			results.push(result);
			// load first subquestion if there is one.
			for(var y = 0; y < answers.length; y++) {
				for(var x = 0; x < question.answers.length; x++) {
					var answerID = question.answers[x].answer.replace(/[^a-ä0-9]/gi, '_');
					if(answerID == answers[y]) {
						for(var d = 0; d < question.answers[x].subquestions.length; d++) {
							console.log(index + 1 + d);
							questions.insert(index + 1 + d, question.answers[x].subquestions[d]);
						}
					}
				}	
			}
			var tmpIndex = index + 1;
			if(questions.length > tmpIndex) {
				index = tmpIndex;
				LoadQuestion(questions[index]);
				return;
			}
		}
	});
}

$(document).ready(function() {
	if($(window).width() < 720) {
		$("#wrapper").css("width", "100%");
	}
	$.getJSON("questions.json", function(data) {
		questions = data.questions;
		LoadQuestion(questions[index]);
	});
});