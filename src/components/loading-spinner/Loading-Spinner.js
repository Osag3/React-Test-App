import React from 'react';
import { PropTypes } from 'prop-types';
import './Loading-Spinner.css';

const LoadingSpinner = props => {
  return (
    <div>
      <div className="spinner-container">
        <div className="loading-spinner" />
      </div>
      <div className="loading-text-container">
        <div className="loading-text">{props.loadingText}</div>
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  loadingText: PropTypes.string
};
export default LoadingSpinner;
