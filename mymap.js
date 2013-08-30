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



	for(x in foo.Locations){
		// console.log(foo.Locations[x].place_name);

		var p = new google.maps.LatLng(foo.Locations[x].lat, foo.Locations[x].lng);

		var marker = new google.maps.Marker({
			position: p,
			map: map,
			title: foo.Locations[x].place_name
		});

	}
}
