import React from 'react';
import Equirectangular from './equirectangular';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import {Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Quote, Slide, Spectacle, Text} from 'spectacle';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  flatEarth: require('../assets/flat-earth.jpg'),
  eratosthenes: require('../assets/eratosthenes.jpg'),
  syene: require('../assets/syene.jpg'),
  circumference: require('../assets/circumference.jpg'),
  sphere: require('../assets/sphere.png'),
  triangulation: require('../assets/triangulation.jpg'),
  clarke: require('../assets/clarke.jpg'),
  ellipsoid: require('../assets/ellipsoid.png'),
  geoid: require('../assets/gravity-anomalies.png'),
  sextant: require('../assets/sextant.jpg'),
  greenwich: require('../assets/greenwich.jpg'),
  developable: require('../assets/developable.jpg'),
  surfaces: require('../assets/surfaces.png'),
  secant: require('../assets/secant.png'),
  plumb: require('../assets/plumb.jpg'),
  geodetic: require('../assets/geodetic-latitude.png'),
  geocentric: require('../assets/geocentric-latitude.png')
};

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

          <Slide bgImage={images.flatEarth.replace('/', '')}
              notes="Babylonian world map, 6th century BCE">
            <Appear fid="1">
              <Heading bgColor="primary" caps padding={15} size={1}>
                flat earth mapping was easy
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.eratosthenes.replace('/', '')}/>

          <Slide bgImage={images.syene.replace('/', '')}
              notes="On the summer solstice, the sun casts no shadows in Syene"/>

          <Slide bgImage={images.circumference.replace('/', '')}
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
            <Image src={images.sphere.replace('/', '')}/>
          </Slide>

          <Slide>
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
            <Image src={images.triangulation.replace('/', '')} width="50%"/>
          </Slide>

          <Slide bgImage={images.clarke.replace('/', '')}>
            <Appear>
              <Text padding={20} textColor="white">
                solved 920 equations without the use of a calculator
              </Text>
            </Appear>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.ellipsoid.replace('/', '')}/>
          </Slide>

          <Slide bgColor="black" notes="Gravity anomalies.  Mountain ranges create positive anomalies.  Glacial isostatic disequilibrium creates negative anomalies.  Enter the geoid.  Gravity acts perpendicular to this surface.">
            <Image src={images.geoid.replace('/', '')}/>
          </Slide>

          <Slide>
            <Heading padding={20} size={3} textColor="white">Key concepts for terrestrial measurements</Heading>
            <Appear><Text padding={10} textColor="white">a <strong>spheroid</strong> approximates the geoid,</Text></Appear>
            <Appear><Text padding={10} textColor="white">the <strong>geoid</strong> represents a surface of equal gravity potential,</Text></Appear>
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
                <Image src={images.sextant.replace('/', '')}/>
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
                <Image src={images.greenwich.replace('/', '')}/>
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

          <Slide bgImage={images.developable.replace('/', '')}>
            <Heading>
              Developable surfaces
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.surfaces.replace('/', '')} width="95%"/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.secant.replace('/', '')} width="95%"/>
          </Slide>

          <Slide bgColor="white">
            <Heading size={2} textColor="primary">Equirectangular</Heading>
            <Equirectangular height={512} width={1024}/>
            <Text textColor="primary" textSize="1em">
              <code>x = λ · cos φ<sub>1</sub><br/>y = φ</code>
            </Text>
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
                <Image src={images.plumb.replace('/', '')}/>
              </Fill>
            </Layout>
            <Appear>
              <Text padding={10} textColor="primary" textSize="2em">angle between zenith and known declination of a star</Text>
            </Appear>
            <Appear>
              <Text padding={10} textColor="primary" textSize="2em">but plumb is subject to gravitational and centrifugal acceleration</Text>
            </Appear>
          </Slide>

          <Slide bgColor="white">
            <Heading margin={20} size={2} textColor="primary">
              geodetic latitude
            </Heading>
            <Image src={images.geodetic.replace('/', '')}/>
          </Slide>

          <Slide bgColor="white">
            <Heading margin={20} size={2} textColor="primary">
              geocentric latitude
            </Heading>
            <Image src={images.geocentric.replace('/', '')}/>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
