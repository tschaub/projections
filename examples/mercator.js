var map = new ol.Map({
  target: document.getElementById('map'),
  layers: [
    new ol.layer.Vector({
      source: new ol.source.Vector({
        url: '../data/points.json',
        format: new ol.format.GeoJSON()
      }),
      style: function(feature, resolution) {
        return new ol.style.Style({
          image: new ol.style.Circle({
            radius: 200000 / resolution,
            fill: new ol.style.Fill({
              color: 'orange'
            })
          })
        });
      }
    })
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 1
  })
});
