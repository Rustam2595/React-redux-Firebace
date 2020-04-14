import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react'

export class MapContainer extends React.Component {
    render() {
        return (
            <div>
                <Map google={this.props.google} zoom={10}>
                    <Marker onClick={this.onMarkerClick} name={'Current location'} />

                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC5voHVaM0Xx97uhTLJfhVml2byW6wndoE')
})(MapContainer)