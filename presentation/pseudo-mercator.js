import React from 'react';
import ol from 'planet-maps';

// (true) Mercator
var yandex = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://sat0{1-4}.maps.yandex.net/tiles?l=sat&v=3.260.0&x={x}&y={y}&z={z}&lang=en_US'
  })
});

// Web Mercator
var overlay = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://{a-d}.tiles.mapbox.com/v3/planet.jh0b3oee/{z}/{x}/{y}.png'
  })
});

const PseudoMercator = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired
  },

  componentDidMount: function() {
    var map = new ol.Map({
      target: this.refs.map,
      controls: [],
      view: new ol.View({
        center: [0, 2309000],
        zoom: 2
      }),
      layers: [yandex, overlay]
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

export default PseudoMercator;
