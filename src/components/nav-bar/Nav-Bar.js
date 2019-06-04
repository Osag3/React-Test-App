import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) => {
    if(props.showNavBar === 'false'){
        return null;
    }
    return (<div>Im the nav bar.</div>)
}
NavBar.propTypes = {
    showNavBar: PropTypes.string
}
export default NavBar;