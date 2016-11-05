$( document ).ready(function() {

var currentIndex = 0;
var items = $('.slider div');
var itemAmt = items.length;
var navItems = $( "#photos" ).children("li");

 function cycleItems(direction) {
 	if (direction === undefined) {
 		direction = "right";
 	}
	var item = $('.slider div').eq(currentIndex);
	items.fadeOut(400);
	item.fadeIn(400);
	navItems.removeClass("active");
	navItems.eq(currentIndex).addClass("active");
	console.log(navItems[currentIndex]);
	}


	var autoSlide = setInterval(function() 
		{ 
			currentIndex += 1;
			if ( currentIndex > itemAmt - 1) {
			currentIndex = 0;
		}
		cycleItems();
	}, 5000);



	$('.next').click(function() {
		clearInterval(autoSlide);
		currentIndex += 1;
		if (currentIndex > itemAmt - 1) {
			currentIndex = 0;
		}
		cycleItems("right");
	});

	$('.previous').click(function() {
		clearInterval(autoSlide);
		currentIndex -= 1;
		if (currentIndex < 0 ) {
			currentIndex = itemAmt - 1;
		}
		cycleItems("left");
	});


	$("#photos li").on('click',function(){
		clearInterval(autoSlide);
		currentIndex = $(this).index();
		cycleItems();
	});


cycleItems();
});
