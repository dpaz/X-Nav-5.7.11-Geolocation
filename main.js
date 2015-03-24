$(document).ready(function(){
	
	var map;
	
	
	getLocation()
	
	function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $("#map").innerHTML = "Geolocation is not supported by this browser.";
    }
	}
	function showPosition(position) {
			lat = position.coords.latitude;
			long = position.coords.longitude;
		  map = L.map("map").setView([lat,long], 16);
		  L.tileLayer(' http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png').addTo(map);
	}
	
	
	
	
})
