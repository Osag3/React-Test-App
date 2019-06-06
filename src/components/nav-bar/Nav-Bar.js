import React from 'react';
import PropTypes from 'prop-types';
import './Nav-Bar.css';
const NavBar = props => {
  if (props.showNavBar === 'false') {
    return null;
  }
  return (
    <React.Fragment>
      <div className="nav-bar-container">
        <div className="logo-icon-container">
          <div className="logo-icon" />
        </div>
        <div className="logo-name-container">
          <div className="logo-name">Wormwood.io</div>
        </div>
      </div>
    </React.Fragment>
  );
};
NavBar.propTypes = {
  showNavBar: PropTypes.string
};
export default NavBar;
