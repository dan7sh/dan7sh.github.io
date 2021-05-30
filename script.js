function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 19.289183,
            lng: 72.856510
        },
    });
    const image =
        "https://dan7sh.com/Resources/map-pic.png";
    const beachMarker = new google.maps.Marker({
        position: {
            lat: 19.289183,
            lng: 72.856510
        },
        map,
        icon: image,
    });
}