# From Marine Chronometers to Slippy Maps

Early mappers assumed a flat earth.  Later, round was discovered, and the earth was assumed to be a perfect sphere.  In the 18th century, earth was recognized as an imperfect sphere.  Today, we know it is very lumpy (mountain ranges create positive anomalies, ocean trenches and glacial isostatic disequilibrium create negative anomalies).

Spheroids:

 * Clarke 1866
 * GRS 1980
 * WGS 1984

Geographic Coordinate Systems (GCS): datum, unit of measure, and prime meridian.

# Coordinate Reference Systems

## Projection

### Concepts

Characteristics intended to preserve one or more of area, shape, direction/bearing, distance, scale:

 * conformal - angles preserved locally
 * equal area
 * equidistant
 * gnomic - great circles are straight lines
 * azimuthal - direction to a fixed location is preserved

Developable surfaces (graphics from report.pdf fig 1):

 * cylindrical
 * conic
 * planar

(All three are variations of a cone.)

 * tangent
 * secant


## Datum

 * spheroid
 * global
 * local

Spheroid is 3-dimensional shape formed by rotating an ellipse (sometimes also called an ellipsoid).  Spheroids are used to approximate the geoid - the surface of the earth's gravity field.

A datum is a more precise approximation of the geoid.  Datums can be used to approximate the geoid for a local area or for the globe.  Datums are based on a particular spheroid and may incorporate local variations in elevation.

## History

### Equirectangular

A.k.a equidistant cylindrical projection, geographic projection, or la carte parallélogrammatique projection, and which includes the special case of the plate carrée projection or geographic projection.

Ptolemy claims that Marinus of Tyre invented the projection in 100 AD.  Maps meridians to vertical straight lines of constant spacing and circles of latitude to horizontal straight lines of constant spacing.

    x = λ cos ψ1
    y = ψ

Where ψ1 are standard parallels (north and south) where the scale of the projection is true.  Plate carrée (square plate) is special case where ψ1 is zero.


### Mercator

(Use report.pdf fig 7.)

Developed in 1569, the Mercator projection was developed for nautical purposes because it represents rhumb lines as straight segments.  Linear scale is constant in all directions for a given point, making the projection conformal.  Area distortion increases with latitude, with the scale becoming infinite at the poles.

Initially incompatible with marine navigation because longitude could not be accurately determined at sea and because magnetic directions were being used.  With the introduction of the marine chronometer and knowledge of the spatial distribution of magnetic declination, Mercator became usable for navigation in the middle of the 18th century.

19th century cartographers adopted Mercator for global maps (likely because it was in widespread use for nautical maps).  Northern countries exaggerated at the expense of Central Africa.


### Polyconic

Soon after its inception in 1879, the USGS chose the Polyconic projection for its mapping program - likely because it is simple to construct.

### State Plane

Influenced by military and civilian mappers in Europe, the USGS established the State Plane Coordinate System in the 1930s.  This uses Lambert Conformal Conic for long (east-west) states and Transverse Mercator for tall (north-south) states.

### UTM

 * developed by US Army Corps of Engineers in the 1940s
 * conformal
 * eases distance calculation between points (using Pythagorean theorem instead of the trig required for lat/lon)
 * secant transverse Mercator using 60 (6 degree) zones

### Gall-Peters

Presented by Arno Peters in 1973 as an alternative to Mercator, restoring rightful proportions to equatorial countries.  Cylindrical equal-area projection.

### Web Mercator

Initially used by Google Maps in 2005.  Identified and reverse engineered by open source web mapping people.  Considered flawed by cartographers, geodesy folks, and standards bodies.  Because standards bodies were slow to accept it, it was given the unofficial identifier of OpenLayers:900913 or EPSG:900913.  Numerous ESRI and EPSG identifiers followed, and it is now officially EPSG:3857.

(Compare formulas for the sphere and ellipsoid report.pdf p ~ 44.)
