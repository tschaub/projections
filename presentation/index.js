import React from 'react';
import Equirectangular from './equirectangular';
import CentralCylindrical from './central-cylindrical';
import GallPeters from './gall-peters';
import TransverseMercator from './transverse-mercator';
import PseudoMercator from './pseudo-mercator';
import Mercator from './mercator';
import Winkel from './winkel';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Quote,
  Slide, Spectacle, Table, TableItem, TableRow, Text
} from 'spectacle';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  badRap: require('../assets/bad-rap.png'),
  centralCylindrical: require('../assets/central-cylindrical.png'),
  circumference: require('../assets/circumference.jpg'),
  clarke: require('../assets/clarke.jpg'),
  clock: require('../assets/clock.jpg'),
  developable: require('../assets/developable.jpg'),
  ellipsoid: require('../assets/ellipsoid.png'),
  eratosthenes: require('../assets/eratosthenes.jpg'),
  flatEarth: require('../assets/flat-earth.jpg'),
  geocentric: require('../assets/geocentric-latitude.png'),
  geodetic: require('../assets/geodetic-latitude.png'),
  geoid: require('../assets/gravity-anomalies.png'),
  google: require('../assets/google.jpg'),
  greenwich: require('../assets/greenwich.jpg'),
  mercatorSphereForward: require('../assets/mercator-sphere-forward.png'),
  mercatorSphereInverse: require('../assets/mercator-sphere-inverse.png'),
  mercatorEllipsoidForward: require('../assets/mercator-ellipsoid-forward.png'),
  mercatorEllipsoidInverse: require('../assets/mercator-ellipsoid-inverse.png'),
  originalMercator: require('../assets/original-mercator.png'),
  plumb: require('../assets/plumb.jpg'),
  rhumb: require('../assets/rhumb.png'),
  secant: require('../assets/secant.png'),
  sextant: require('../assets/sextant.jpg'),
  sphere: require('../assets/sphere.png'),
  surfaces: require('../assets/surfaces.png'),
  syene: require('../assets/syene.jpg'),
  triangulation: require('../assets/triangulation.jpg'),
  watch: require('../assets/harison-h4.jpg')
};

for (var key in images) {
  images[key] = images[key].replace('/', '');
}

preloader(images);

const theme = createTheme({
  primary: '#009da5'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['fade']} transitionDuration={250}>

          <Slide>
            <Heading caps lineHeight={1} size={1}>
              A brief history of map projections
            </Heading>
          </Slide>

          <Slide bgImage={images.flatEarth}
              notes="Babylonian world map, 6th century BCE">
            <Appear fid="1">
              <Heading bgColor="primary" caps padding={15} size={1}>
                flat earth mapping was easy
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.eratosthenes}/>

          <Slide bgImage={images.syene}
              notes="On the summer solstice, the sun casts no shadows in Syene"/>

          <Slide bgImage={images.circumference}
              notes="On the same day in Alexandria, there were shadows.  This can be explained by a round earth"/>

          <Slide
              notes="Measured the sun's angle of elevation at noon on the solstice to be 7° 12' south of the zenith (actually 7° 46'), meridian arc is 5,000 stades, world is 250,000 stades - within 10% if you assume Olympic stade of 176.4 meters">
            <Text padding={20} textColor="white" textSize="2.5em">
              <code>∠AOS = 7° 12'</code>
            </Text>
            <Appear>
              <Text padding={20} textColor="white" textSize="2.5em">
                <code><span style={{textDecoration: 'overline'}}>AS</span> = 5000 stadia</code>
              </Text>
            </Appear>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote>Earth is a perfect sphere, 250000 stadia around.</Quote>
              <Cite>Eratosthenes, 240 BCE</Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.sphere}/>
          </Slide>

          <Slide notes="Newton postulated that the earth was ellipsoidal.  The french thought it was shaped like an egg.  Meridian surveys were unleashed.">
            <Heading size={1}>
              18th century surveyors noticed problems
            </Heading>
          </Slide>

          <Slide>
            <Heading>
              Earth was recognized as an imperfect sphere
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.triangulation} width="50%"/>
          </Slide>

          <Slide bgImage={images.clarke}>
            <Appear>
              <Text padding={20} textColor="white">
                solved 920 equations without the use of a calculator
              </Text>
            </Appear>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.ellipsoid}/>
          </Slide>

          <Slide bgColor="black" notes="Gravity anomalies.  Mountain ranges create positive anomalies.  Glacial isostatic disequilibrium creates negative anomalies.  Enter the geoid.  Gravity acts perpendicular to this surface.">
            <Image src={images.geoid}/>
          </Slide>

          <Slide>
            <Heading padding={20} size={3} textColor="white">Key concepts for terrestrial measurements</Heading>
            <Appear><Text padding={10} textColor="white">the <strong>geoid</strong> represents a surface of equal gravity potential,</Text></Appear>
            <Appear><Text padding={10} textColor="white">a <strong>spheroid</strong> approximates the geoid,</Text></Appear>
            <Appear><Text padding={10} textColor="white">and a <strong>datum</strong> includes spheroid, orientation, and any local variations</Text></Appear>
          </Slide>

          <Slide>
            <Heading>
              An aside on longitude
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Layout>
              <Fill>
                <Heading margin={20} size={2} textColor="primary">
                  measuring latitude is easy(ish)
                </Heading>
              </Fill>
              <Fill>
                <Image src={images.sextant}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="white">
            <Layout>
              <Fill>
                <Heading margin={20} size={2} textColor="primary">
                  measuring longitude requires a reference point
                </Heading>
                <Appear>
                  <Heading margin={20} size={2} textColor="red">
                    and a clock
                  </Heading>
                </Appear>
              </Fill>
              <Fill>
                <Image src={images.greenwich}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading>
              measuring longitude at solar noon
            </Heading>
            <Text padding={20} textColor="white" textSize="2.5em">
              <code>λ = minutes since solar noon in Greenwich / -4</code>
            </Text>
          </Slide>

          <Slide>
            <Heading caps padding={20} size={2} textColor="white">
              Components of a Geographic Coordinate System
            </Heading>
            <Text textColor="white" textSize="2em">1. datum</Text>
            <Text textColor="white" textSize="2em">2. prime meridian</Text>
            <Text textColor="white" textSize="2em">3. unit of measure</Text>
          </Slide>

          <Slide>
            <CodePane lang="javascript" source={require('raw!../assets/wgs-84.txt')} textSize="0.9em"/>
          </Slide>

          <Slide>
            <Heading caps>
              On to map projections!
            </Heading>
          </Slide>

          <Slide bgImage={images.developable}>
            <Heading>
              Developable surfaces
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.surfaces} width="95%"/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.secant} width="95%"/>
          </Slide>

          <Slide bgColor="white">
            <Layout>
              <Fill>
                <Heading margin={20} size={2} textColor="primary">
                  not a useful projection
                </Heading>
              </Fill>
              <Fill>
                <Image src={images.centralCylindrical}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="white">
            <Heading size={2} textColor="primary">Central Cylindrical</Heading>
            <CentralCylindrical height={512} width={1024}/>
            <Text textColor="primary" textSize="1em">
              <code>x = λ · cos φ<sub>1</sub><br/>y = tan φ</code>
            </Text>
          </Slide>

          <Slide>
            <Heading padding={20} size={4} textColor="white">useful characteristics of a projection</Heading>
            <Table textAlign="left" textColor="white">
              <tbody>
                <TableRow>
                  <TableItem padding="10px 20px"><strong>conformal</strong></TableItem>
                  <TableItem padding="10px 20px">isotropic scale, preserves angles</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px 20px"><strong>authalic</strong></TableItem>
                  <TableItem padding="10px 20px">point scales in orthogonal directions are inversely proportional, preserves area</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px 20px"><strong>equidistant</strong></TableItem>
                  <TableItem padding="10px 20px">constant scale on a set of defined lines</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px 20px"><strong>gnomic</strong></TableItem>
                  <TableItem padding="10px 20px">great circles are straight lines</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem padding="10px 20px"><strong>azimuthal</strong></TableItem>
                  <TableItem padding="10px 20px">azimuth angles from a point are preserved</TableItem>
                </TableRow>
              </tbody>
            </Table>
          </Slide>

          <Slide bgColor="white">
            <Heading size={2} textColor="primary">Equirectangular</Heading>
            <Equirectangular height={512} width={900}/>
            <Text textColor="primary" textSize="1em">
              <code>x = λ · cos φ<sub>1</sub><br/>y = φ</code>
            </Text>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote>The master of Rupelmonde stands unsurpassed in the history of cartography since the time of Ptolemy.</Quote>
              <Cite>Nordenskiöld, 1889</Cite>
            </BlockQuote>
          </Slide>

          <Slide bgImage={images.originalMercator}>
            <Appear>
              <Heading bgColor="primary" padding={25} size={4} textColor="white">
                New and more complete representation of the terrestrial globe properly adapted for use in navigation
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="white">
            <Heading padding="20px 0" textColor="primary">straight rhumb lines</Heading>
            <Image src={images.rhumb} width="95%"/>
          </Slide>

          <Slide bgColor="white">
            <Layout>
              <Fill>
                <Heading margin={20} size={2} textColor="primary">
                  doesn't work on a boat
                </Heading>
              </Fill>
              <Fill>
                <Image src={images.clock}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="white">
            <Layout>
              <Fill>
                <Image src={images.watch}/>
              </Fill>
              <Fill>
                <Heading margin={20} size={2} textColor="primary">
                  longitude calculation now practical!
                </Heading>
                <Text textColor="primary">(1770s)</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote>The master of Rupelmonde stands unsurpassed in the history of cartography since the time of Ptolemy.</Quote>
              <Cite>Nordenskiöld, 1889</Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.badRap} width="80%"/>
          </Slide>

          <Slide bgColor="white" notes="Note that Greenland can fit inside of Africa 14 times">
            <Heading padding="0 0 30px 0" size={2} textColor="primary">Mercator</Heading>
            <Mercator height={512} width={900}/>
          </Slide>

          <Slide bgColor="white">
            <Heading padding="0 0 30px 0" size={2} textColor="primary">Gall-Peters</Heading>
            <GallPeters height={500} width={900}/>
          </Slide>

          <Slide bgColor="white">
            <Heading padding="0 0 30px 0" size={2} textColor="primary">Winkel-Tripel</Heading>
            <Winkel height={500} width={900}/>
          </Slide>

          <Slide bgColor="white">
            <Heading padding="0 0 30px 0" size={2} textColor="primary">Transverse Mercator</Heading>
            <TransverseMercator height={500} width={900}/>
          </Slide>

          <Slide>
            <Heading>So why is Mercator so ubiquitous?</Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="white">Google Maps (2005)</Heading>
            <Image src={images.google} width="80%"/>
          </Slide>

          <Slide>
            <Heading>mysterious projection</Heading>
          </Slide>

          <Slide bgColor="white">
            <Heading size={2} textColor="primary">Mercator meets Pseudo</Heading>
            <PseudoMercator height={500} width={900}/>
          </Slide>

          <Slide>
            <Heading>EPSG:900913</Heading>
            <Text padding={10} textColor="white">standards bodies refused to adopt it,</Text>
            <Appear><Text padding={10} textColor="white">governments warned against it,</Text></Appear>
            <Appear><Text padding={10} textColor="white">everybody wanted it</Text></Appear>
          </Slide>

          <Slide>
            <Heading>
              An aside on latitude
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Layout>
              <Fill>
                <Heading margin={20} size={2} textColor="primary">
                  astronomical latitude
                </Heading>
              </Fill>
              <Fill>
                <Image src={images.plumb}/>
              </Fill>
            </Layout>
            <Text padding={10} textColor="primary" textSize="2em">angle between zenith and known declination of a star</Text>
            <Appear>
              <Text padding={10} textColor="primary" textSize="2em">but plumb is subject to gravitational and centrifugal acceleration</Text>
            </Appear>
          </Slide>

          <Slide bgColor="white">
            <Heading margin={20} size={2} textColor="primary">
              geodetic latitude
            </Heading>
            <Image src={images.geodetic}/>
          </Slide>

          <Slide bgColor="white">
            <Heading margin={20} size={2} textColor="primary">
              geocentric latitude
            </Heading>
            <Image src={images.geocentric}/>
          </Slide>

          <Slide>
            <Heading>
              Back to (true) Mercator
            </Heading>
          </Slide>

          <Slide>
            <Heading>
              Equations for Normal Mercator on a sphere
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.mercatorSphereForward} width="80%"/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.mercatorSphereInverse}/>
          </Slide>

          <Slide>
            <Heading>
              Equations for Normal Mercator on an ellipsoid
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.mercatorEllipsoidForward}/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.mercatorEllipsoidInverse}/>
          </Slide>

          <Slide>
            <CodePane lang="javascript" source={require('raw!../assets/epsg-3395.txt')} textSize="0.7em"/>
          </Slide>

          <Slide>
            <Heading caps size={2} textColor="white">
              Pseudo Mercator users spherical development of ellipsoidal coordinates!!
            </Heading>
          </Slide>

          <Slide>
            <Heading>
              so what?
            </Heading>
          </Slide>

          <Slide>
            <Heading padding={20} size={3} textColor="white">Lessons</Heading>
            <Appear><Text padding={10} textColor="white">choose a projection that suits your needs</Text></Appear>
            <Appear><Text padding={10} textColor="white">and don't be afraid to transform your data</Text></Appear>
            <Appear><Text padding={10} textColor="white">(even in the browser)</Text></Appear>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
