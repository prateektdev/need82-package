import { INVALID_USERNAME, INVALID_PASSWORD } from "../../../constants/constants";

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'username',
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
  return errors;
};
