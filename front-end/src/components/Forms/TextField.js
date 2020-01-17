import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormField } from 'redux-form'
import {
  Form
} from 'react-bootstrap';
import '../../App.css';

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
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} {...input}
        className={classes} disabled={disabled} {...props}
        placeholder={placeholder}
        accept={accept}
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
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  accept: PropTypes.any
};

Field.defaultProps = {
  component: renderTextField,
};

export default Field;
