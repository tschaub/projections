import React from 'react';
import ol from 'planet-maps';
import {countries} from './data';

var format = new ol.format.GeoJSON();

var proj4 = require('proj4');

ol.proj.setProj4(proj4);

var halfSize = 20037508.342789248;
proj4.defs('EPSG:3395', '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs');
var projection = ol.proj.get('EPSG:3395');
projection.setExtent([-halfSize, -halfSize, halfSize, halfSize]);

const Mercator = React.createClass({

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
        center: [0, 2309000],
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
              color: '#009da5'
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

export default Mercator;
