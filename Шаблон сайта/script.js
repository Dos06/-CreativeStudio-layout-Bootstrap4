function menuFunc() {
    var x = document.getElementById("menu");
    if (x.className === "menu mt-5 d-flex flex-wrap justify-content-between") {
        x.className += " responsive";
    }
    else {
        x.className = "menu mt-5 d-flex flex-wrap justify-content-between";
    }
}

// function initMap() {
//     var uluru = {lat: 43.2307761, lng: 76.881341};
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 5, center: uluru}
//     );
//     var marker = new google.maps.Marker({position: uluru, map: map});
// }
