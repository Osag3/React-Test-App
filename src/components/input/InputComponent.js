import React from 'react';
import PropTypes from 'prop-types';
import './InputComponent.css';
import '../../styles.css';
import { isNullOrUndefined } from 'util';

const InputComponent = props => {
  let type = 'text';
  let errorMessage = '';
  if (!isNullOrUndefined(props.password) && props.password) {
    type = 'password';
  }
  return (
    <div>
      <div className="input-placeholder">{props.placeholder}</div>
      <input value={props.value} onChange={e => props.change(e.target.value)} className="input-component" type={type} />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

InputComponent.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
  password: PropTypes.bool
};

export default InputComponent;
