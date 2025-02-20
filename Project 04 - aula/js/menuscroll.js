$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var OffSetTop = $(herf).offset().top;
        $('html,body').animate({'scrollTop':OffSetTop});
        return false;
    })
});