$(function(){
    $('.social-share').jsSocials({
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]

        //JS SOCIALS
        //http://js-socials.com/
    });
    // mask jquery
    //https://igorescobar.github.io/jQuery-Mask-Plugin/
    $('input[name=telefone]').mask('(99) 99999-9999');
    $('input[name=data]').mask('99/99/9999')

    //fancy box
    //https://github.com/fancyapps/ui/releases
    $('a').fancybox();
});