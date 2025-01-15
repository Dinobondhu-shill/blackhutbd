import React from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = () => {
  const defaultProps = {
    center: {
      lat: 23.806874122064716,
      lng:  90.36910619507678,
    },
    zoom: 11
  };

  return (
   <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
  );
};

export default Maps;