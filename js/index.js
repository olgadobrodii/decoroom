// Google Map

function initMap() {
    var targetCoords = {lat: 49.4275961, lng: 32.0957261};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: targetCoords
    });

    new google.maps.Marker({
      position: targetCoords,
      map: map
    });
}

// Google Analitics

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-117121001-1');
