// event listener on load trigger counter
$(document).on("pageload",clock);


// timer
let time = 0;
var clock = setInterval(function () {
	$('.time').text (time + ' secs');
	time ++;
},1000);

// score tracker code.
let points = 0.5; //first click needs to increment 1 and 2 clicks will equal one turn after that.
var correctAnswers = 0;
var array = [];
var index = 0;

$('.card').click(function(){
	var select = $(this).text();
	// takes values from cards, and adds them to an array for comparison.
	array.push(select);
	$('h1').text(array);
	$(this).addClass('selected');
	index += 1;

	// registers clicks and takes value, then it compares it to each other to check if it's correct or not.
	if (index == 2){
		if(array[0] == array[1]){
			setTimeout(function(){$('.selected').addClass('good');},800);
			index = 0;
			array = [];
			// adds to number of correct answers
			correctAnswers +=1;
		}
		if(array[0] != array[1]){
			setTimeout(function(){
				$('*').removeClass('selected');
			},800);
			index = 0;
			array = [];
		}
	};




	// registers the number of correct pais in the board. Once all of them have been completed it triggers alert and stops clock.
	if (correctAnswers === ($('.card').length/2)){
		setTimeout(function() { alert('You win. It took you ' +(time -1) + ' seconds and '+ Math.round(points-1) +' moves. Congratulations!'); }, 1800); //added delay to allow animation to finish
		clearInterval(clock);
	};

	// score tracker code.
	if (points < 9.5){
	$('.stars').html(Math.round(points) + ' moves <span>&#9733; &#9733; &#9733;</span>' );
	}

	if (points >= 9.5){
	$('.stars').html(Math.round(points) + ' moves <span>&#9733; &#9733; &#9734;</span>' );
	}

	if (points >= 13.5){
	$('.stars').html(Math.round(points) + ' moves <span>&#9733; &#9734; &#9734;</span>' );
	}

	points += 0.5;

});


//reset button
$('.reset').click(function() {
		window.location.reload();
});
