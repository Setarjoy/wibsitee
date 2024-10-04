<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Maps Example</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        #map {
            height: 500px; /* Tinggi peta */
            width: 100%;   /* Lebar peta */
        }
    </style>
    <script>
        function init() {
            var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
            var mapOptions = {
                zoom: 7,
                center: myLatlng,
                scrollwheel: false,
                styles: [
                    // Tambahkan gaya peta Anda di sini
                ]
            };

            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            
            var addresses = ['Brooklyn'];

            for (var x = 0; x < addresses.length; x++) {
                $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&key=YOUR_API_KEY', null, function (data) {
                    if (data.results.length > 0) {
                        var p = data.results[0].geometry.location;
                        var latlng = new google.maps.LatLng(p.lat, p.lng);
                        new google.maps.Marker({
                            position: latlng,
                            map: map,
                            icon: 'images/loc.png' // Pastikan path ini benar
                        });
                    }
                });
            }
        }

        google.maps.event.addDomListener(window, 'load', init);
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
</head>
<body>
    <h1>Google Maps Example</h1>
    <div id="map"></div>
</body>
</html>
