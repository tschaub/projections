
 * early mappers had it easy
   * earth was flat
   * so were maps

 * Eratosthenes
   * maps got hard
   * assumed perfect sphere

 * 18th century surveyors noticed problems
   * earth recognized as imperfect sphere
   * surveyors measure with respect to "level"

 * Principal Triangulation of Great Britain, 1784-1853
   * Alexander Ross Clarke (Ordnance Survey)
   * Improved upon the Airy spheroid

 * Clarke 1866 spheroid
   * semimajor axis: 6,378,206.4 m
   * semiminor axis: 6,356,538.8 m

 * today we know the earth is very lumpy
   * mountain ranges create positive anomalies
   * glacial isostatic disequilibrium creates negative anomalies
   * the geoid - gravity acts perpendicular to this surface

 * key concepts for measurements made on the earth
   * geoid
   * spheroid
   * datum

 * measuring longitude
   * measuring latitude is easy(ish): angle to Polaris or sun at noon on Equinox (this gives you astronomical latitude, not geodedic or geocentric)
   * measuring longitude requires a reference point: prime meridian (one degree for every 4 minutes diff in noon)

 * Geographic Coordinate System (GCS)
   * datum
   * prime meridian
   * unit of measure

      GEOGCS["GCS_WGS_1984",
        DATUM["D_WGS_1984",
          SPHEROID["WGS_1984", 6378137, 298.257223563]
        ],
        PRIMEM["Greenwich", 0],
        UNIT["Degree", 0.0174532925199433]
      ]

 * but we don't care about 3d, on to projections

 * Developable surfaces (zero Gaussian curvature; surfaces that can be flattened to a plane without distortion)
   * cylindrical
   * conic
   * planar

 * Tangent or secant
   * lines of true scale
   * plot scale versus latitude
   * Tissot's indicatrix

 * Central cylindrical (not practical)
   * x = λ cos ψ1
   * y = tan ψ
   * serves no practical purpose

 * Equirectangular
   * x = λ cos ψ1
   * y = ψ

 * Characteristics intended to preserve one or more of area, shape, direction/bearing, distance, and scale:

   * conformal
   * equal area
   * equidistant
   * gnomic
   * azimuthal

 * Mercator

    PROJCS["WGS 84 / World Mercator",
      GEOGCS["WGS 84",
        DATUM["WGS_1984",
          SPHEROID["WGS 84", 6378137, 298.257223563],
        ],
        PRIMEM["Greenwich", 0],
        UNIT["degree", 0.01745329251994328],
      ],
      UNIT["metre", 1],
      PROJECTION["Mercator_1SP"],
      PARAMETER["central_meridian", 0],
      PARAMETER["scale_factor", 1],
      PARAMETER["false_easting", 0],
      PARAMETER["false_northing", 0],
      AXIS["Easting", EAST],
      AXIS["Northing", NORTH]
    ]

 * Gall-Peters

 * UTM

 * Web Mercator
   * compare formulas for sphere and ellipsoid
   * cartographers, geodesy folks, standards bodies hate it
   * everybody uses it

 * An aside on latitude (see https://en.wikipedia.org/wiki/Latitude#Latitude_and_coordinate_systems)
   * astronomical latitude (angle between zenith and known declination of a star)
   * geodedic latitude - almost the same as astronomical latitude except that gravitational and centrifugal acceleration make true vertical different from normal to reference ellipsoid
   * spherical polar latitude - compliment of polar angle θ
   * ellipsoidal latitude - construct the ellipse intersecting P that is confocal to the reference ellipsoid ...

 * Web mapping
   * rendering arbitrary bbox on demand - slow
   * tiles - fast!

 * XYZ addressing scheme
   * examples z: 0-22
   * cache friendly
   * everybody loves them

 * But not all tiles have to be Web Mercator

 * Non-Pseudo-Mercator examples

 * Reprojection examples

 * GCJ-09, BD-09, and Baidu Mercator
