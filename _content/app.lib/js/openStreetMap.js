function initMap() {
    var map = L.map('map').setView([20.993, 105.807], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a new circle and add it to the map
    // var circle = L.circle([20.993, 105.807], {
    //             color: 'red',
    //             fillColor: '#f03',
    //             fillOpacity: 0.5,
    //             radius: 500
    //         }).addTo(map);
    //         // Create a new polygon and add it to the map
    //         var polygon = L.polygon([
    //     [20.990, 105.807],
    //     [20.993, 105.802],
    //     [20.999, 105.801],
    //     [20.991, 105.805]
    //         ], {
    //             color: 'blue',
    //             fillColor: '#3388ff',
    //             fillOpacity: 0.5
    //         }).addTo(map);

    //var marker = L.marker([20.993, 105.807]).addTo(map);

    var polyline = L.polyline([
        [20.993133, 105.805825],
        [20.995768, 105.809573],
        [20.994521, 105.810544],
        [20.993615, 105.809239]
    ], { color: 'blue' }).addTo(map);
}