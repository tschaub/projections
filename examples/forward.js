var radius = 6378137;
var extent = [-180, -85, 180, 85];

function forward(coord) {
  return [
    radius * Math.PI * coord[0] / 180,
    radius * Math.log(Math.tan(Math.PI * (coord[1] + 90) / 360))
  ];
}

var height = 300;
var width = 800;
var padding = 20;

var earthRadius = height / 2 - padding;
var earthCenter = [padding + earthRadius, height / 2];

var mapResolution = Math.PI * radius / earthRadius;
var mapCenter = [width - padding, height / 2];

function rad(deg) {
  return Math.PI * deg / 180;
}

function earthPx(coord) {
  return [
    earthCenter[0] + earthRadius * Math.cos(rad(coord[0])) * Math.cos(rad(coord[1])),
    earthCenter[1] - earthRadius * Math.sin(rad(coord[1]))
  ];
}

function mapPx(coord) {
  coord = forward(coord);
  return [mapCenter[0], mapCenter[1] - (coord[1] / mapResolution)];
}

var canvas = document.getElementById('drawing');
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

// draw the earth
context.beginPath();
context.strokeStyle = 'rgba(0,0,0,0.5)'
context.lineWidth = 0.2;
var deltaLon = 10;
var deltaLat = 2;
for (var lon = 0; lon <= 180; lon += deltaLon) {
  var lat = -90;
  var coord = earthPx([lon, lat]);
  context.moveTo(coord[0], coord[1]);
  for (lat += deltaLat; lat <= 90; lat += deltaLat) {
    coord = earthPx([lon, lat]);
    context.lineTo(coord[0], coord[1]);
  }
}
context.stroke();

// draw lines from earth to map
context.beginPath();
context.strokeStyle = 'rgba(0,0,0,0.5)'
context.lineWidth = 0.5;
deltaLat = 5;
for (var lat = extent[1]; lat <= extent[3]; lat += deltaLat) {
  var coord = [0, lat];
  var start = earthPx(coord);
  context.moveTo(start[0], start[1]);
  var end = mapPx(coord);
  context.lineTo(end[0], end[1]);
}
context.stroke();

// draw the map
context.beginPath();
context.lineWidth = 0.5;
context.strokeStyle = 'rgba(0,0,0,0.5)'
var sw = mapPx(extent.slice(0, 2));
var ne = mapPx(extent.slice(2));
context.moveTo(sw[0], sw[1]);
context.lineTo(ne[0], ne[1]);
context.stroke();
