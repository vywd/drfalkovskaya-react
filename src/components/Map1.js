import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// let imgRef = require('../img/medical-map.svg')

let kyivLocation = {
  lat: 50.5004950964041,
  lng: 30.51617014904613,
};

const AnyReactComponent = () => <img style={{
  width: '50px',
  height: '50px',

}} src={'https://firebasestorage.googleapis.com/v0/b/drfalkovskaya.appspot.com/o/mapimages%2Fdermatology1.png?alt=media'} alt="" />

{/* <div style={{
  backgroundImage:
          "url(../img/7.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "200px",
  height: "200px"
  }}></div>; */}

class Map1 extends Component {
  static defaultProps = {
    center: kyivLocation,
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD7_qrMPEtOI85jwUc7-R2iATN81eCbxbw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
          
            lat={50.5004950964041}
            lng={30.51617014904613}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map1;