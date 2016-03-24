'use strict'

const fs = require('fs');
const turf = require('turf');
const countries = require('./data/countries.json');

function intersects(point) {
  return countries.features.some(country => turf.inside(point, country));
}

function createPoint(lon, lat) {
  let point = turf.point([lon, lat]);
  point.properties = {
    lon: lon,
    lat: lat,
    land: intersects(point)
  }
  return point;
}

const points = [];
let i = 0;
for (let lon = -180; lon <= 180; lon += 4) {
  for (let lat = -90; lat <= 90; lat += 4) {
    let point = createPoint(lon, lat);
    if (point.properties.land) {
      points[i] = point;
      ++i;
    }
  }
}

const json = JSON.stringify({
  type: 'FeatureCollection',
  features: points
});

fs.writeFile('./data/points.json', json, err => {
  if (err) {
    process.stderr.write(`${err}\n`);
    process.exit(1);
  }
});
