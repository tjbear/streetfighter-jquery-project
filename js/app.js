$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
        $('.instructions-first').fadeOut().finish();
        $('.instructions-final').fadeIn().css('display', 'inline-block');
    })
    .mouseleave(function() {
        $('.ryu-action').hide();
        $('.ryu-still').show();
        $('.instructions-final').fadeOut().finish();
        $('.instructions-first').fadeIn().css('display', 'inline-block');
    })
    .mousedown(function() {
        playHoudken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
            .animate(
                {'left': '1020px'},
                500,
                function() {
                    $(this).stop();
                    $(this).hide();
                    $(this).css('left', '520px');
            }
        );
    })
    .mouseup(function() {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });
});

$(document).keydown(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-cool').show();
        }
    })
    .keyup(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });

function playHoudken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}