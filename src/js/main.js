$(document).ready(function () {

    var portfolioSection = $('#portfolio-section');
    var aboutSection = $('#about-section');

    var switcher = $('.switcher');

    var anchor = $("<a>");

    var linkImageGit = $( "<img>" );

    aboutSection.click(function(){
        $(".pages").animate({
            'margin-left': "-=100%"
        },1500);
    });


    portfolioSection.click(function(){
        $(".pages").animate({
            'margin-left': "+=100%"
        },1500);
    });

    var jqxhr = $.getJSON( "../json/data.json", function (data) {

        $( "<img>" ).attr( "src", data.Neurocity.poster).appendTo($('#poster-project-display'));
        $( "<p>" + data.Neurocity.description + '</p>' ).appendTo($('#description-project-display'));  
        linkImageGit.attr( "src", data.Default.poster).appendTo(anchor);

        anchor.attr({ 
            href: data.Neurocity.link,
            class: 'link-to-git'
        }).appendTo($('#description-project-display'));

        switcher.click(function (project) {

            $('#poster-project-display').remove();
            $('#description-project-display').remove();
            $('.link-to-git').remove();
            linkImageGit.remove();

            $( "<span>" ).attr({
                class:  "poster-project-display", 
                id: "poster-project-display"
            }).appendTo($('#project-poster'));
    
            $( "<span>" ).attr({
                class: "description-project-display",
                id: "description-project-display"
            }).appendTo($('#project-description'));
            
            if (this.id == 'books-show-display') {
                $( "<iframe>" ).attr({
                    src: data.Books.poster,
                    allowFullScreen: ' ',
                    webkitallowFullScreen: ' ',
                    mozallowFullScreen: ' '
                }).appendTo($('#poster-project-display'));
            }
    
            switchProject(this.id);

        });

        function switchProject (project) {
            switch (project) {
                case project = 'neurocity-show-display':
                        $( "<img>" ).attr( "src", data.Neurocity.poster).appendTo($('#poster-project-display'));
                        $( "<p>" + data.Neurocity.description + '</p>' ).appendTo($('#description-project-display'));
                        linkImageGit.attr( "src", data.Default.poster).appendTo(anchor);
                        anchor.attr( "href", data.Neurocity.link).appendTo($('#description-project-display'));

                    break;
                case project = 'books-show-display':
                        $( "<p>" + data.Books.description + '</p>' ).appendTo($('#description-project-display'));
                    break;
                case project = 'bae-show-display':
                        $( "<img>" ).attr( "src", data.Bae.poster).appendTo($('#poster-project-display'));
                        $( "<p>" + data.Bae.description + '</p>' ).appendTo($('#description-project-display'));
                        linkImageGit.attr( "src", data.Default.poster).appendTo(anchor);
                        anchor.attr( "href", data.Bae.link).appendTo($('#description-project-display'));
                    break
                case project = 'blackjack-show-display':
                        $( "<img>" ).attr( "src", data.BlackJack.poster).appendTo($('#poster-project-display'));
                        $( "<p>" + data.BlackJack.description + '</p>' ).appendTo($('#description-project-display'));
                        linkImageGit.attr( "src", data.Default.poster).appendTo(anchor);
                        anchor.attr( "href", data.BlackJack.link).appendTo($('#description-project-display'));
                    break
                case project = 'vega-show-display':
                        $( "<img>" ).attr( "src", data.VegaJewelry.poster).appendTo($('#poster-project-display'));
                        $( "<p>" + data.VegaJewelry.description + '</p>' ).appendTo($('#description-project-display'));
                        linkImageGit.attr( "src", data.Default.poster).appendTo(anchor);
                        anchor.attr( "href", data.VegaJewelry.link).appendTo($('#description-project-display'));
                    break
                default:
                        console.log('exit')
                    break;
            }
        }

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
