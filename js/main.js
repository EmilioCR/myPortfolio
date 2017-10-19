(function () {
	$(".pages").css({
		'margin-left': "-=100%"
	});
    return false;
})()

$('#about-section').click(function(){
    $(".pages").animate({
		'margin-left': "-=100%"
	},1500);
    return false;
});

$('#portfolio-section').click(function(){
    $(".pages").animate({
		'margin-left': "+=100%"
	},1500);
    return false;
});
