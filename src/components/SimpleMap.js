import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { inject, observer } from 'mobx-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {
  constructor(){
    super();
    this.state = {
      center: {
        lat: '',
        lng: ''
      },
      zoom: 11
    };
    this.loadMap = this.loadMap.bind(this);
  }
  componentDidMount(){
    this.loadMap();
  }

  loadMap(){
    // Check to see if the browser supports the GeoLocation API.
    if (navigator.geolocation) {
      // Get the location
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        console.log(lat, lon);

        this.setState({center: {lat: lat, lng: lon}});
        this.props.locationStore.center.lat = lat;
        this.props.locationStore.center.lng = lon;
      });
    } else {
      // Print out a message to the user.
      document.write('Your browser does not support GeoLocation :(');
    }

  }

  render() {
    return (
         <GoogleMap
          center={this.state.center}
          zoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={'HUGE FISH'}
          />
        </GoogleMap>
    );
  }
}

SimpleMap.propTypes = {
  locationStore: React.PropTypes.object
};

export default inject('locationStore')(observer(SimpleMap));
