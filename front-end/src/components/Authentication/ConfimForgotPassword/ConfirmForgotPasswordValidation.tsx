import { INVALID_USERNAME, INVALID_CODE, INVALID_PASSWORD } from "../../../constants/constants";

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'username',
    'code',
    'password'
  ];

  // Check for required fields
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Please Enter ' + field;
    }
  });
  if (values['username'] && values['username'].length < 3) {
    errors['username'] = INVALID_USERNAME;
  }
  if (values['code'] && values['code'].length < 6) {
    errors['code'] = INVALID_CODE;
  }
  if (values['password'] &&
    !values['password'].match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    errors['password'] = INVALID_PASSWORD;
  }
  return errors;
};