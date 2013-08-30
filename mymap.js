var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true: false);

function initialize() {
	var myLatlng = new google.maps.LatLng(1.3010,103.8600);

	var myOptions = {
		zoom: 12,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	// Try HTML5 geolocation
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			map.setCenter(pos);
		});}

	var infowindow = new google.maps.InfoWindow({ maxWidth: 260 });

	function createMarker(h) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(h.lat, h.lng),
			map: map,
			title: h.place_name
		});

		google.maps.event.addListener(marker, 'click', function() {
			var s = "<h3>" + h.place_name + "</h3><p>" + h.place_desc + "</p>";
			if (iOS) {
				//s += '<a href="maps://?q=' + h.place_location + '">map</a></li>';
				s += '<p><a href="comgooglemaps://?q=' + h.place_location + '">Directions</a></p>';
			}
			infowindow.setContent(s);
			infowindow.open(map,marker);
		});
		return marker;
	}

	for(x in foo.Locations){
		createMarker(foo.Locations[x]);
	}
}
