$(document).ready(function () {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function () {
        // Play hadouken sound
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show();
        // animate hadouken to the right of the screen
    })
    .mouseup(function () {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});