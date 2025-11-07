window.onload = function(){
    var map;
    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollwheel:false,
            zoom: 12,
            mapTypeId:google.maps.MapTypeId.ROADMAP //'satellite'
        }
        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }
    function addMarker(lat,long,icon,content,click){
        var latLng = {'lat':lat,'lng':long};
        var marker = new google.maps.Marker({
        position:latLng,
        map:map,
        icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        })
        if(click == true){
            google.maps.event.addListener(marker,'click',function(){
                infoWindow.open(map,marker);
            });
        }else{
            infoWindow.open(map,marker);
        }
        
    }
    initialize();
    var conteudo = '<p style="color: black;font-size:18px; padding:5px 0;">Meu endereço</p>'
    addMarker(-27.648598,-48.577423,'',conteudo,true);
    //podemos adicionar outros markers

    //função para colocar um tempo para efetuar uma ação
    setTimeout(function(){
        map.panTo({'lat':-23.550520,'lng':-46.633309})
    },5000);
    
}