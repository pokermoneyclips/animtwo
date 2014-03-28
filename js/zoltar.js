// Object info for our fortunes along with some equations
var fortune = {
	name: "",
	image: "",
	desc: ""
};

// Constructor
function Fortune(name, image, desc) {
	this.name = name;
	this.image = image;
	this.desc = desc;
	Fortune.objects.push(this);
};

/*
http://stackoverflow.com/questions/2602800/how-to-get-all-objects-of-a-given-type-in-javascript
Fortune.objects.push(this.type) and Fortune.objects = [] are set up to store all created objects in an array so I can loop over them
*/
Fortune.objects = []; 

// Prototype Call to use with Constructor function
Fortune.prototype = fortune;

var death = new Fortune("Death" , "" , "<p>This is not a good card to have. There is only doom in your future. You should refresh your browser and try this card again!!! OR ELSE</p>");
var king = new Fortune("King", "", "<p>You are truly the King of your castle. Nothing but good fortune will come your way!</p>");
var jester = new Fortune("Jester", "", "<p>You are going to have a lot of fun in the future. This is a great card to have for anyone who likes to have fun and smile!</p>");
var jack = new Fortune("Jack", "", "<p>You are currently second in command in some aspect of your life. That is about to change for you.</p>")
var steve = new Fortune("Steve", "", "<p>What a strange card to get. Is your name Steve by chance?</p>")


Fortune.objects.sort(function() {return 0.5 - Math.random()}); // Resort the array so we can grab random values

var firstCardValue = Fortune.objects.length - 1; // Gives me the last random card

var secondCardValue = 0; // Gives me the first random card

var thirdCardValue = Fortune.objects.length - 2; // Gives me the second to last random card


// Get the spans for inserting content
var firstCard = document.getElementById("value1");
var secondCard = document.getElementById("value2");
var thirdCard = document.getElementById("value3");

// Insert the content
firstCard.innerHTML = Fortune.objects[firstCardValue].name + Fortune.objects[firstCardValue].desc;
secondCard.innerHTML = Fortune.objects[secondCardValue].name + Fortune.objects[secondCardValue].desc;
thirdCard.innerHTML = Fortune.objects[thirdCardValue].name + Fortune.objects[thirdCardValue].desc;

// Document Ready Function
$(document).ready(function() {
	
	$(".one").click(function() {
		$(".zoltar_head").addClass("active");
		$("aside").addClass("active");
		$(".one").addClass("active");		
	});
	
	$(".two").click(function() {
		$(".zoltar_head").addClass("active");
		$("article").addClass("active");
		$(".two").addClass("active");
		$(".three").addClass("off");
	});
	
	$(".three").click(function() {
		$(".zoltar_head").addClass("active");
		$("article").addClass("active");
		$(".three").addClass("active");
		$(".two").addClass("off");
	});









// END document ready
}); 