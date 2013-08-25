function downloadUrl(url, callback) {
	var request = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest;
	request.onreadystatechange = function() {
		// console.log(request.readyState);
		if (request.readyState == 4) {
			callback(request.responseText, request.status);
		}
	};
	request.open('GET', url, true);
	request.send(null);
}

function initialize() {
	var myLatlng = new google.maps.LatLng(1.3010,103.8600);
	var myOptions = {
		zoom: 12,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	downloadUrl("hawkers.txt", function(data, responseCode) {

		if (responseCode == 200) {
			lines = data.split('\n');
			for (var i = 0; i < lines.length - 1; i++) {

				g = lines[i].split(':');
				//console.log("X:" + g[2] + "Y:" + g[3]);
				var p = new google.maps.LatLng(parseFloat(g[1]), parseFloat(g[2]));

				var marker = new google.maps.Marker({
					position: p,
					map: map,
					title: g[0]
				});

			}
		} else alert("Request resulted in error with responseCode: " + responseCode);
	});
}
