Array.prototype.insert = function(index) {
    index = Math.min(index, this.length);
    arguments.length > 1
        && this.splice.apply(this, [index, 0].concat([].pop.call(arguments)))
        && this.insert.apply(this, arguments);
    return this;
};

(function($) {
	$.isMobile = function() {
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
			return true;
		} else {
			return false;
		}
	}
	$.createWithID = function(tag, id) {
		var element = document.createElement(tag.toLowerCase());
		if(typeof(id) != "undefined") element.id = id;
		return $(element);
	}
	$.createParagraph = function(id, className, text) {
		var paragraph = document.createElement("p");
		if(typeof(id) != "undefined") paragraph.id = id;
		if(typeof(className) != "undefined") paragraph.className = className;
		if(typeof(text) != "undefined") {
			var text = document.createTextNode(text);
			paragraph.appendChild(text);
		}
		return $(paragraph);
	}
	$.createButton = function(id, className, text) {
		var button = document.createElement("button");
		button.type = "button";
		if(typeof(id) != "undefined") button.id = id;
		if(typeof(className) != "undefined") button.className = className;
		if(typeof(text) != "undefined") {
			var text = document.createTextNode(text);
			button.appendChild(text);
		}
		return $(button);

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
var distributions;
var scores = [];

function CheckResults() {
	console.log(distributions);
	for(var a = 0; a < distributions.length; a++) {
		distributions[a].score = 0;
		distributions[a].maximum = 0;
		console.log(distributions[a]);
		for(var b = 0; b < distributions[a].questions.length; b++) {
			for(var c = 0; c < results.length; c++) {
				console.log(distributions[a].questions[b].question + " == " + results[c].question);
				if(distributions[a].questions[b].question == results[c].question) {
					for(var d = 0; d < distributions[a].questions[b].answers.length; d++) {
						distributions[a].maximum += 1; 
						for(var e = 0; e < results[c].answers.length; e++) {
							if(distributions[a].questions[b].answers[d].replace(/[^a-ä0-9]/gi, '_') == results[c].answers[d]) {
								distributions[a].score += 1;
							}
						}
					}
				}
			}
		}
	}
	console.log(distributions);
}

function LoadQuestion(question) {
	$("#selection").empty();
	$("#selection").append($.createWithID("h2", "question-header"));
	$("#question-header").text(question.question);
	$("#selection").append($.createWithID("form", "answers"));
	for(var x = 0; x < question.answers.length; x++) {
		var answerID = question.answers[x].answer.replace(/[^a-ä0-9]/gi, '_');
		$("#answers").append($.createCheckboxInput(answerID, "answer_inputs", "answers", question.answers[x].answer, question.answers[x].answer));
	}
	$("#answers").append($.createSubmit("answer-submit", "btn btn-primary btn-block", "Seuraava"));
	$("#answer-submit").click(function(evt) {
		evt.preventDefault();
		var answers = [];
		$(".answer_inputs").each(function() {
			if($(this).prop("checked") == true) {
				answers.push($(this).prop("id"));
			}
		});
		var result = { question : $("#question-header").text(), answers : answers };
		results.push(result);
		console.log(results);
		// load subquestions based on results if there are them.
		if(answers.length > 0) {
			for(var y = 0; y < answers.length; y++) {
				for(var x = 0; x < question.answers.length; x++) {
					var answerID = question.answers[x].answer.replace(/[^a-ä0-9]/gi, '_');
					if(answerID == answers[y]) {
						for(var d = 0; d < question.answers[x].subquestions.length; d++) {
							// needs to check if the question is not yet appended or has to do subquestion deletion on back button.
							questions.insert(index + 1 + d, question.answers[x].subquestions[d]);
						}
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
	});
	$("#answers").append($.createButton("answer-back", "btn btn-warning btn-block", "Edellinen"));
	$("#answer-back").click(function(evt) {
		evt.preventDefault();
		var tmpIndex = index - 1;
		if(tmpIndex >= 0) {
			index = tmpIndex;
			delete results[index]; 
			LoadQuestion(questions[index]);
		}
	});
	$("#answers").append($.createButton("answer-end", "btn btn-success btn-block", "Katso tulokset"));
	$("#answer-end").click(function(evt) {
		evt.preventDefault();
		CheckResults();
		index = 0;
		results = [];
		$.getJSON("questions.json", function(data) {
			questions = data.questions;
		});
		LoadSplash();
	});
	$("#answers").append($.createButton("answer-stop", "btn btn-danger btn-block", "Keskeytä testi"));
	$("#answer-stop").click(function(evt) {
		evt.preventDefault();
		index = 0;
		results = [];
		$.getJSON("questions.json", function(data) {
			questions = data.questions;
		});
		LoadSplash();
	});
}

function LoadSplash() {
	$("#selection").empty();
	$("#selection").append($.createParagraph("", "", "Tervetuloa. Olet saattanut kuulla käyttöjärjestelmästä nimeltä Linux ja huomannut niitä olevan paljon erilaisia kuten Mint, Debian ja Ubuntu. Distroserin tarkoitus on auttaa sinua valitsemaan sinulle sopiva GNU/Linux jakelu."));
	$("#selection").append($.createParagraph("", "", "Distroser on testi jonka avulla voimme ehdottaa sinulle GNU/Linux jakelua. Kysymme yhden kysymyksen kerralla ja voit keskeyttää testin koska tahansa tai saada tulokset."));
	$("#selection").append($.createButton("start-questions", "btn btn-success btn-block", "Aloita testi"));
	$("#start-questions").click(function(evt) {
		evt.preventDefault();
		LoadQuestion(questions[index]);
	});
}

$(document).ready(function() {
	if($.isMobile() == false) {
		if($(window).width() <= 1024) {
			$("#wrapper").css("width", "60%");
		} else if($(window).width() <= 1280) {
			$("#wrapper").css("width", "50%");
		} else if($(window).width() <= 1366) {
			$("#wrapper").css("width", "40%");
		} else if($(window).width() <= 1920) {
			$("#wrapper").css("width", "30%");
		}
		$("#wrapper").css("margin-left", "auto");
		$("#wrapper").css("margin-right", "auto");
	}
	$.getJSON("questions.json", function(data) {
		questions = data.questions;
	});
	$.getJSON("distributions.json", function(data) {
		distributions = data.distributions;
	});
	LoadSplash();
});