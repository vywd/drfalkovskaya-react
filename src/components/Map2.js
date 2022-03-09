import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <img style={{
  width: '50px',
  height: '50px',

}} src={'https://firebasestorage.googleapis.com/v0/b/drfalkovskaya.appspot.com/o/mapimages%2Fdermatology1.png?alt=media'} alt="" />

class Map2 extends Component {
  static defaultProps = {
    center: {
      lat: 39.497283195756175,
      lng:  -0.3764262750919702,
    },
    zoom: 14
  };

  render() {
    return (
      <div style={{ height: '300px', width: 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD7_qrMPEtOI85jwUc7-R2iATN81eCbxbw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.497283195756175}
            lng={-0.3764262750919702}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map2;