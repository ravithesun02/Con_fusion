$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#login').click(function () {
        $('#loginmodal').modal('toggle');
    });
    $('#reserve').click(function () {
        $('#reservemodal').modal('toggle');
    });
    $('#carouselbuttons').click(function () {
        if ($('#carouselbuttons').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselbuttons').children('span').removeClass('fa-pause');
            $('#carouselbuttons').children('span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carouselbuttons').children('span').removeClass('fa-play');
            $('#carouselbuttons').children('span').addClass('fa-pause');
        }

    });

});