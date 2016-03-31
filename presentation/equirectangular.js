import React from 'react';
import ol from 'planet-maps';
import {countries} from './data';

var format = new ol.format.GeoJSON();

const Equirectangular = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired
  },

  componentDidMount: function() {
    var wgs84Sphere = new ol.Sphere(6378137);

    var circles = [];
    var radius = 800000;
    var x, y;
    for (x = -180; x < 180; x += 30) {
      for (y = -90; y < 90; y += 30) {
        var circle4326 = ol.geom.Polygon.circular(wgs84Sphere, [x, y], radius, 64);
        circles.push(new ol.Feature(circle4326));
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
        projection: 'EPSG:4326',
        center: [0, 0],
        zoom: 2
      }),
      layers: [
        new ol.layer.Vector({
          source: new ol.source.Vector({
            features: format.readFeatures(countries)
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

    var graticule = new ol.Graticule({
      strokeStyle: new ol.style.Stroke({
        color: 'rgba(0,0,0,0.5)',
        width: 0.5,
        lineDash: [2, 4]
      })
    });
    graticule.setMap(map);

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

export default Equirectangular;
