$(function (){
    var elWidth = ($('.box').width()); //tomar cuidado ao setar width pelo js por conta que utilizamos padding o que pode ocorrer de atrapalhar nosso elemento e melhor utilizar diretamente o .css para colocar 
    console.log ("Width: "+$('.box').width()) //ele pegara todo o elemento contando tb os espaçamentos de padding

    console.log ("Inner Width: "+$('.box').innerWidth()) //ele pegara todo o elemento contando tb os espaçamentos de padding

    console.log ("Outer Width: "+$('.box').outerWidth(true)) //ele pegara todo o elemento contando tb os espaçamentos de padding

    console.log ("height: "+$('.box').height()) //ele pegara todo o elemento contando tb os espaçamentos de padding  se o parametro for true

    console.log ("Inner height: "+$('.box').innerHeight()) //ele pegara todo o elemento contando tb os espaçamentos de padding

    console.log ("Outer height: "+$('.box').outerHeight(true)) //ele pegara todo o elemento contando tb os espaçamentos de padding se o parametro for true
})