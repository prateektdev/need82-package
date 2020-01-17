import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormField } from 'redux-form'
import { Form } from 'react-bootstrap';


export const renderSelectField = ({
  input,
  label,
  placeholder,
  disabled,
  classes,
  onChange,
  meta: { touched, error },
  children
}) => (
    <Form.Group>
      <Form.Label >{label}</Form.Label>
      <div className={classes}>
        <select className='form-control' disabled={disabled} placeholder={placeholder} {...input}>
          {children}
        </select>
        {touched && error &&
          <div className="signerror">
            {error}
          </div>
        }
      </div>
    </Form.Group>
  );

const Field = ({ options, ...props }) => (
  <FormField {...props}>
    {options.map(option => (
      <option key={option.id} disabled={option.disabled} value={option.id}>
        {option.title}
      </option>
    ))}
  </FormField>
);

Field.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
  placeholder:PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  autoWidth: PropTypes.bool,
  disabled:PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Field.defaultProps = {
  component: renderSelectField,
};

export default Field;