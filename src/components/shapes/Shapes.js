import React from 'react';
import './Shapes.css';
import { PropTypes } from 'prop-types';
const Shapes = props => {
  return (
    <div>
      <div className="loading-spinner" />
      <div className="loading-text">{props.loadingText}</div>
    </div>
  );
};

Shapes.propTypes = {
  loadingText: PropTypes.string
};

export default Shapes;
