function initialize() {
	var myLatlng = new google.maps.LatLng(1.3010,103.8600);

	var myOptions = {
		zoom: 12,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	// Try HTML5 geolocation
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			map.setCenter(pos);
		});}

	function createMarker(h) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(h.lat, h.lng),
			map: map, 
			title: h.place_name
		});

		var infowindow = new google.maps.InfoWindow({
			content: "<h1>" + h.place_name + "</h1><p>" + h.place_desc + "</p>"
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
		return marker;
	}

	for(x in foo.Locations){
		createMarker(foo.Locations[x]);
	}
}
