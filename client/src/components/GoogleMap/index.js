import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({children, ...props}) => (
    <div style={{height: "50vh", width: "100%"}}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC4hr4A2hI8IyYXCi87Mfz-THwGY_fkaC0" }}
            {...props}
        >
            {children}
        </GoogleMapReact>
    </div>
);

GoogleMap.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
};

GoogleMap.defaultProps = {
    children: null,
};

export default GoogleMap;