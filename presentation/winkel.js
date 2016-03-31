import React from 'react';
import ol from 'planet-maps';
import {countries} from './data';

var format = new ol.format.GeoJSON();

var radius = 6371008.8;

function rad(deg) {
  return Math.PI * deg / 180;
}

function sinc(x) {
  if (x === 0) {
    return 1;
  }
  return Math.sin(x) / x;
}

function alpha(lon, lat) {
  return Math.acos(Math.cos(lat) * Math.cos(lon / 2));
}

function forward(input, opt_output, opt_dimension) {
  var output = opt_output || input.slice();
  var dimension = opt_dimension || 2;
  for (var i = 0, ii = input.length; i < ii; i += dimension) {
    var lon = rad(input[i]);
    var lat = rad(input[i + 1]);
    var a = alpha(lon, lat);
    output[i] = radius * (lon * 2 / Math.PI + 2 * Math.cos(lat) * Math.sin(lon / 2) / sinc(a)) / 2;
    output[i + 1] = radius * (lat + Math.sin(lat) / sinc(a)) / 2;
  }
  return output;
}

function inverse(input, opt_output, opt_dimension) {
  // unimplemented
  return input.slice();
}

var halfSize = Math.PI * radius;

var projection = new ol.proj.Projection({
  code: 'winkel',
  extent: [-halfSize, -halfSize, halfSize, halfSize],
  units: 'm',
  global: true,
  worldExtent: [-180, -72, 180, 72]
});

ol.proj.addProjection(projection);
ol.proj.addCoordinateTransforms('EPSG:4326', projection, forward, inverse);

const WinkelTripel = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired
  },

  componentDidMount: function() {
    var wgs84Sphere = new ol.Sphere(6378137);

    var circles = [];
    var circleRadius = 500000;
    var x, y;
    for (x = -160; x < 160; x += 30) {
      for (y = -90; y < 90; y += 20) {
        var circle = ol.geom.Polygon.circular(wgs84Sphere, [x, y], circleRadius, 64)
            .transform('EPSG:4326', projection);
        circles.push(new ol.Feature(circle));
      }
    }

    var tissot = new ol.layer.Vector({
      visible: false,
      opacity: 0.75,
      source: new ol.source.Vector({
        features: circles
      }),
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#FFAB00'
        })
      })
    });

    var map = new ol.Map({
      target: this.refs.map,
      controls: [],
      view: new ol.View({
        projection: projection,
        center: [0, 0],
        zoom: 2
      }),
      layers: [
        new ol.layer.Vector({
          source: new ol.source.Vector({
            features: format.readFeatures(countries, {featureProjection: projection})
          }),
          style: new ol.style.Style({
            fill: new ol.style.Fill({
              color: '#009da5'
            }),
            stroke: new ol.style.Stroke({
              color: '#fff',
              width: 0.5
            })
          })
        }),
        tissot
      ]
    });

    map.on('singleclick', function() {
      tissot.setVisible(!tissot.getVisible())
    });

    this.map = map;
  },

  componentWillUnmount: function() {
    this.map.setTarget(null);
  },

  render: function() {
    var style = {
      height: this.props.height,
      width: this.props.width,
      margin: '0 auto'
    };
    return (
      <div ref="map" style={style}/>
    );
  }

});

export default WinkelTripel;
