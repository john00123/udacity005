// event listener on load trigger counter
$(document).on("pageload",clock);


// timer
let time = 0;
var clock = setInterval(function () {
  $('.time').text (time + ' secs');
	time ++;
},1000);


// score tracker code.
let points = 0.5;
var array = [];
var index = 0;
$('.card button').click(function(){
  var select = $( this ).text();
  array.push(select);
  index += 1;
  $('h1').text(array);
  $('h3').text(array[3]);

  if (index == 2){
    if(array[0] == array[1]){
      $('body').css('background-color','blue');
      index = 0;
      array = [];
    } else{
      $('body').css('background-color','red');
      index = 0;
      array = [];
    }
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
