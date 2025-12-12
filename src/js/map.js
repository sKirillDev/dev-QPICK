function initMap() {
  const center = { lat: 48.473132603808715, lng:35.030927368274696 };
  const zoomLevel = window.innerWidth <= 768 ? 16 : 17;

  const map = new google.maps.Map(document.getElementById("map"), {
    center,
    zoom: zoomLevel,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#E6E4E0" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#735139" }] },
      { featureType: "water", stylers: [{ color: "#a7c0ff" }] },
      { featureType: "road", stylers: [{ color: "#ffffff" }] },
      { featureType: "poi", stylers: [{ visibility: "off" }] },
      { featureType: "building", elementType: "labels.text.fill", stylers: [{ visibility: "on" }, { color: "#202020" }] }
    ],
    disableDefaultUI: true
  });
}

window.onload = initMap;