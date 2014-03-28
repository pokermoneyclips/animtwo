//http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
var random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

// Generate the ID for the box to place this under
var mybox = "box" + random;

// define the ID well be placing the element under
var underbox = document.getElementById(mybox);

// define our ball
var ball = "<span class=\"ball\"></span>"; 

underbox.innerHTML = ball;

var randomove = Math.floor(Math.random() * (500 - 10 + 1)) + 10;

$("#start").click(function() {
		$(".boxes").addClass("active");	
		$(".ball").addClass("hide");
		$(this).remove();
	});
	
$(".boxes").click(function() {
	$(".ball").removeClass("hide");
});
	
	