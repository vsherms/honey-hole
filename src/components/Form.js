import React from 'react';
import { inject, observer } from 'mobx-react';
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap';

class Form extends React.Component {
  constructor(){
    super();

  }
  render(){
    return(
      <div className="parent">
        <div className="container">
          <h1 className="welcome-header">Fill out your Honey Hole Info!</h1>
          <h2>Latitude: {this.props.locationStore.center.lat}</h2>
          <h2>Longitude: {this.props.locationStore.center.lng}</h2>

          <form>
            <h2>My Notes </h2>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Textarea</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  locationStore: React.PropTypes.object
};

export default inject('locationStore')(observer(Form));
