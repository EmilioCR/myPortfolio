var portfolioSection = $('#portfolio-section');
var aboutSection = $('#about-section');

var neurocityShow = $('#neurocity-show-display');
var booksShow = $('#books-show-display');

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

// booksShow.click(function(){
//     booksDisplay.toggle();
//     neurocityDisplay.toggle();
// });

// neurocityShow.click(function(){
//     neurocityDisplay.toggle();
//     booksDisplay.toggle();
// });
// 
$(document).ready(function () {
    var jqxhr = $.getJSON( "../json/data.json", function(data) {
        console.log( data.Books );

        $( "<img>" ).attr( "src", data.Neurocity.poster).appendTo($('#poster-project-display'));
        $( "<p>" + data.Neurocity.description + '</p>' ).appendTo($('#description-project-display'));   

        neurocityShow.click(function(){
            $('#poster-project-display').remove();
            $('#description-project-display').remove();

            $( "<span>" ).attr({
                            class: "poster-project-display", 
                            id: "poster-project-display"
            }).appendTo($('#project-poster'));
            $( "<span>" ).attr({
                            class: "description-project-display", 
                            id: "description-project-display"
                        }).appendTo($('#project-description'));

            $( "<img>" ).attr( "src", data.Neurocity.poster).appendTo($('#poster-project-display'));
            $( "<p>" + data.Neurocity.description + '</p>' ).appendTo($('#description-project-display'));

        });
        booksShow.click(function(){

            $('#poster-project-display').remove();
            $('#description-project-display').remove();

            $( "<span>" ).attr({
                                class:  "poster-project-display", 
                                id: "poster-project-display"
                        }).appendTo($('#project-poster'));

            $( "<span>" ).attr({
                                class: "description-project-display", 
                                id: "description-project-display"
                        }).appendTo($('#project-description'));

            $( "<iframe>" ).attr({
                                src: data.Books.poster,
                                allowFullScreen: ' ',
                                webkitallowFullScreen: ' ',
                                mozallowFullScreen: ' '
                          }).appendTo($('#poster-project-display'));
            $( "<p>" + data.Books.description + '</p>' ).appendTo($('#description-project-display'));
        });
    })
    .done(function() {
      console.log( "Load success" );
    })
    .fail(function(error) {
      console.log( "error", error );
    })
    .always(function() {
      console.log( "complete" );
    });
})
