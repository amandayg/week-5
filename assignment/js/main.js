/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
//Put downloadData in and parse it
var parseData =function(data){
    return JSON.parse(data);
};
//Make markers with the parsed data
var makeMarkers = function(data){
    return _.map(data, function(obj){
    return L.marker([obj[$('#text-input2').val()], obj[$('#text-input3').val()]]);
  });
};
//plot markers to the map
var plotMarkers = function(markers){
    _.each(markers, function(marker){
    return marker.addTo(map);
    });
};


var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


$('button').click(function(){
    var url = $('#text-input1').val();
    var lat = $('#text-input2').val();
    var long = $('#text-input3').val();
    var dataset = $.ajax(url);

    dataset.done(function(data) {
      var parsed = parseData(data);
      var markers = makeMarkers(parsed);
      plotMarkers(markers);
      });

 });
