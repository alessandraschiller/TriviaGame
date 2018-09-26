$('#start').on('click',function(){
	$('#start').remove();
	game.loadQuestion();
})

$(document).on('click','.answer-button',function(e){
	game.clicked(e);
})

$(document).on('click','#reset',function(){
	game.reset();
})

var questions = [{
	question: "Which one of the Weasley brothers is the oldest?",
	answers: ["Charlie", "Bill", "Percey", "Ron"],
	correctAnswer: "Bill",
	image: "https://media.giphy.com/media/HFdZPf52z9x4s/giphy.gif",
	image2: "https://media.giphy.com/media/AisOYaOZdrS1i/giphy.gif"
}, {
	question: "Which Horcrux was the second one to be destroyed?",
	answers: ["The medallion", "The cup", "The ring", "The diadem"],
	correctAnswer: "The ring",
	image: "https://media.giphy.com/media/26BRzozg4TCBXv6QU/giphy.gif",
	image2: "https://media.giphy.com/media/4jXIVkgjhIQbS/giphy.gif"
}, {
	question: "Who accompanied Harry to the Yule Ball?",
	answers: ["Parvati Patil", "Padma Patil", "Cho Chang", "Ginny Weasley"],
	correctAnswer: "Parvati Patil",
	image: "https://media.giphy.com/media/l01fjs9HRzU08/giphy.gif",
	image2: "https://media.giphy.com/media/yoJC2PM3UL4FPMkNB6/giphy.gif"
}, {
	question: "In the first book, on which floor is the off-limits corridor located?",
	answers: ["On the second floor", "On the third floor", "On the fifth floor", "On the sixth floor"],
	correctAnswer: "On the thrid floor",
	image: "https://media.giphy.com/media/sG6OMoGquxffa/giphy.gif",
	image2: "https://media.giphy.com/media/GD8ypYfe6WnBu/giphy.gif"
}, {
	question: "Which ear did Fred Weasley lose?",
	answers: ["The left ear", "The right ear", "George was the one who lost an ear"],
	correctAnswer: "George was the one who lost an ear",
	image: "https://media.giphy.com/media/26gN16cJ6gy4LzZSw/giphy.gif",
	image2: "https://media.giphy.com/media/NoBXm9gmqzx96/giphy.gif"
}, {
	question: "What is Albus Dumbledore's full name?",
	answers: ["Albus Brian Percival Wulfric Dumbledore", "Albus Wulfric Percival Brian Dumbledore", "Albus Percival Wulfric Brian Dumbledore", "Albus Brian Percival Wulfric Dumbledore"],
	correctAnswer: "Albus Percival Wulfric Brian Dumbledore",
	image: "https://media.giphy.com/media/AOrThUuuOoDCg/giphy.gif",
	image2: "https://media.giphy.com/media/720g7C1jz13wI/giphy.gif"
}, {
	question: "What is Luna Lovegood's Patronus?",
	answers: ["A mouse", "A hare", "A cat", "A ladybug"],
	correctAnswer: "A hare",
	image: "https://media.giphy.com/media/7CyyWLQluMPks/giphy.gif",
	image2: "https://media.giphy.com/media/rTapV77tqAWZO/giphy.gif"
}, {
	question: "Which one of these ingredients is NOT used in the making of Polyjuice potion?",
	answers: ["Lacewing fly", "Leeches", "Fluxweed", "Agapanthus"],
	correctAnswer: "Agapanthus",
	image: "https://media.giphy.com/media/KlaGlBQDSqCGc/giphy.gif",
	image2: "https://media.giphy.com/media/vb7YYpLs9RvR6/giphy.gif"
}, {
	question: "What is the name of the person that Ron turns into while infiltrating the Ministry of Magic?",
	answers: ["Reg Cattermole", "Ray Cuttermile", "Reg Cottarmule", "Rat Cottirmale"],
	correctAnswer: "Reg Cattermole",
	image: "https://media.giphy.com/media/JmWCEiyTiKTMQ/giphy.gif",
	image2: "https://media.giphy.com/media/HIqV5khg6gyqc/giphy.gif"
}, {
	question: "How much is a Galleon worth?",
	answers: ["12 Sickles", "17 Sickles", "23 Sickles", "29 Sickles"],
	correctAnswer: "17 Sickles",
	image: "https://media.giphy.com/media/50YgxbPnjA1LG/giphy.gif",
	image2: "https://media.giphy.com/media/GD8ypYfe6WnBu/giphy.gif"
}, {
	question: "What animal does Rita Skeeter turn into in order to spy on people?",
	answers: ["A beetle", "An ant", "A cockroach", "A spider"],
	correctAnswer: "A beetle",
	image: "https://media.giphy.com/media/b5Ogp12sTcalO/giphy.gif",
	image2: "https://media.giphy.com/media/MkX24qVzVZb5m/giphy.gif"
}, {
	question: "What is the name of the charm which fills the ears of its victim with a buzzing noise?",
	answers: ["Muffilato", "Mufflato", "Muffliato", "Mufflito"],
	correctAnswer: "Muffliato",
	image: "https://media.giphy.com/media/EXmLHydTBn7gc/giphy.gif",
	image2: "https://media.giphy.com/media/i8tL4unehxmvu/giphy.gif"
}, {
	question: "Which one of these people did Bellatrix Lestrange not kill?",
	answers: ["Remus Lupin", "Nymphadora Tonks", "Sirius Black"],
	correctAnswer: "Remus Lupin",
	image: "https://media.giphy.com/media/zQ3SYNrdfdhiU/giphy.gif",
	image2: "https://media.giphy.com/media/720g7C1jz13wI/giphy.gif"
}, {
	question: "What is Hermione's middle name?",
	answers: ["Helen", "Jean", "Gabriel", "Judy"],
	correctAnswer: "Jean",
	image: "https://media.giphy.com/media/N5byr13yA8gIo/giphy.gif",
	image2: "https://media.giphy.com/media/KhuIVfgMwQC6k/giphy.gif"
}, {
	question: "What is Parvati Patil's Boggart?",
	answers: ["A severed hand", "a ghost", "A Jack-in-the-Box", "A mummy"],
	correctAnswer: "A mummy",
	image:"https://media.giphy.com/media/hMMfRc0lGq5bi/giphy.gif",
	image2: "https://media.giphy.com/media/Zymcw7sfNqziU/giphy.gif"

}, {
	question: "What shape are Professor McGonagall's glasses?",
	answers: ["Round", "Oval", "Square", "It's never stated"],
	correctAnswer: "Square",
	image: "https://media.giphy.com/media/3ouZytj8x6Zc4/giphy.gif",
	image2: "https://media.giphy.com/media/iWEiD3N9UX2YE/giphy.gif",

}, {
	question: "Where is Madam Marsh headed to when she rides the Knight Bus with Harry?",
	answers: ["Blackwood", "Abergavenny", "Gresford", "Welshpool"],
	correctAnswer: "Abergavenny",
	image: "https://media.giphy.com/media/PXvCWUnmqVdks/giphy.gif",
	image2: "https://media.giphy.com/media/FYenMRUx3LGy4/giphy.gif"
}];

var game = {
	questions:questions,
	currentQuestion:0,
	counter:30,
	correct:0,
	incorrect:0,
	unanswered:0,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("TIME UP!");
			game.timeUp();
		}
	},
	loadQuestion: function(){
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').html("<h2>TIME REMAINING <span id='counter'>30</span> Seconds</h2>");
		$('#subwrapper').append('<h2>'+questions[game.currentQuestion].question+'</h2>');
		for(var i = 0; i < questions[game.currentQuestion].answers.length; i++){
			$('#subwrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
		}
	},
	nextQuestion: function(){
		game.counter = 30;
		$('#counter').html(game.counter);
		game.currentQuestion++;
		game.loadQuestion();
	},
	timeUp: function(){
		clearInterval(timer);
		game.unanswered++;
		$('#subwrapper').html('<h2>OUT OF TIME!</h2>');
		$('#subwrapper').append('<h3>The Correct Answer Was: '+questions[game.currentQuestion].correctAnswer+ '</h3>');
		if (game.currentQuestion==questions.length-1){
			setTimeout(game.results,3000);
		} else {
			setTimeout(game.nextQuestion,3000);
		}
	},
	results: function(){
		clearInterval(timer);
		$('#subwrapper').html("ALL DONE!");
		$('subwrapper').append("<h3>Correct: "+game.correct+"</h3>");
		$('#subwrapper').append("<h3>incorrect: "+game.incorrect+"</h3>");
		$('#subwrapper').append("<h3>Unanswered: "+game.unanswered+"</h3>");
		$('#subwrapper').append("<button id='reset'>RESET</button>");
	},
	clicked: function(e){
		clearInterval(timer);
		if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
			game.answeredCorrectly();
		} else {
			game.answeredIncorrectly();
		}
	},
	answeredCorrectly: function(){
		console.log("YOU GOT IT!");
		clearInterval(timer);
		game.correct++;
		$('#subwrapper').html('<h2>YOU GOT IT RIGHT</h2>');
		$('#subwrapper').append("<img src="+questions[game.currentQuestion].image+">");
		if (game.currentQuestion==questions.length-1){
			setTimeout(game.results,3000);
		} else {
			setTimeout(game.nextQuestion,3000);
		}
	},
	answeredIncorrectly: function(){
		console.log("WRONG!");
		clearInterval(timer);
		game.incorrect++;
		$('#subwrapper').html('<h2>YOU GOT IT WRONG</h2>');
		$('#subwrapper').append("<img src="+questions[game.currentQuestion].image2+">");
		if (game.currentQuestion==questions.length-1){
			setTimeout(game.results,3000);
		} else {
			setTimeout(game.nextQuestion,3000);
		}
	},
	reset: function(){
		game.currentQuestion = 0;
		game.counter = 0;
		game.correct = 0;
		gaem.incorrect = 0;
		game.unanswered = 0;
		game.loadQuestion();
	},
	playSound: function() {
    var audio = new Audio('themesong.mp3');
    audio.loop = false;
    audio.play(); 
}
}

