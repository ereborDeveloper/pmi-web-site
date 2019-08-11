$(document).ready(whale);
function whale()
{

    $( "#whale" ).mouseenter(function() {
        $(this).fadeTo(100, 0.7, function()
        {
            $(this).css('background-image', 'url(../whaleW.png)');
        }).fadeTo('fast', 1);
    }).mouseleave(function() {
        $(this).fadeTo('easeOutSine', 0.3, function()
        {
            $(this).css('background-image', 'url(../whale.png)');
        }).fadeTo('fast', 1);
    });
}
