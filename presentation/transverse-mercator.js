import React from 'react';
import {world} from './data';
import topojson from 'topojson';
import d3 from 'd3';

var speed = 1e-2;

const TransverseMercator = React.createClass({

  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired
  },

  componentDidMount: function() {
    var land = topojson.feature(world, world.objects.land);
    var borders = topojson.mesh(world, world.objects.countries, function(a, b) {
      return a !== b;
    });

    var canvas = this.refs.canvas;
    var width = this.props.width;
    var height = this.props.height;

    var projection = d3.geo.transverseMercator()
        .scale((width + 1) / 2 / Math.PI)
        .translate([width / 2, height / 2])
        .precision(.5);

    var context = canvas.getContext('2d');
    var path = d3.geo.path()
        .projection(projection)
        .context(context);

    var grid = d3.geo.graticule()();

    this.timer = d3.timer(elapsed => {
      projection.rotate([speed * elapsed, 0]);

      context.clearRect(0, 0, width, height);

      context.beginPath();
      path(land);
      context.fillStyle = '#009da5';
      context.fill();

      context.beginPath();
      path(borders);
      context.lineWidth = .5;
      context.strokeStyle = '#fff';
      context.stroke();

      context.save();
      context.setLineDash([2, 4]);
      context.beginPath();
      path(grid);
      context.lineWidth = .5;
      context.strokeStyle = 'rgba(119,119,119,.5)';
      context.stroke();
      context.restore();

      return !this.isMounted();
    });
  },

  render: function() {
    return (
      <canvas height={this.props.height} ref="canvas" width={this.props.width}></canvas>
    );
  }

});

export default TransverseMercator;
