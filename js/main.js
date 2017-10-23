var portfolioSection = $('#portfolio-section');
var aboutSection = $('#about-section');

var booksShow = $('#books-show-display');
var neurocityShow = $('#neurocity-show-display');
var neurocityDisplay = $('.neurocity-display');
var booksDisplay = $('.books-display');

aboutSection.click(function(){
    $(".pages").animate({
		'margin-left': "-=100%"
	},1500);
    return false;
});


portfolioSection.click(function(){
    $(".pages").animate({
		'margin-left': "+=100%"
	},1500);
    return false;
});

booksShow.click(function(){
    booksDisplay.toggle();
    neurocityDisplay.toggle();
});

neurocityShow.click(function(){
    neurocityDisplay.toggle();
    booksDisplay.toggle();
});