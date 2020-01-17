/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormField } from 'redux-form';
import {
  Form
} from 'react-bootstrap';
import '../../App.css';
import info from '../../assets/images/info.svg';

const renderTextField = ({
  label,
  type,
  input,
  classes,
  value,
  disabled,
  onChange,
  placeholder,
  accept,
  meta: { touched, invalid, error },
  ...props
}) => {

  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{label} <img src={info} className="img-fluid" /></Form.Label>
      <Form.Control type={type} {...input}
        className={classes} disabled={disabled} {...props}
        placeholder={placeholder}
      />
      {touched && invalid &&
        <div className="signerror">
          {error}
        </div>
      }
    </Form.Group>
  );
}

const Field = props => (
  <FormField
    autoComplete={props.name}
    {...props}
  />
);

Field.propTypes = {
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.any,
  value: PropTypes.any,
  accept:PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

Field.defaultProps = {
  component: renderTextField,
};

export default Field;
