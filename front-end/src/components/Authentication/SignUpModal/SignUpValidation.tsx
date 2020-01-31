import { INVALID_EMAIL, INVALID_USERNAME, INVALID_PASSWORD } from "../../../constants/constants";

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'email',
    'username',
    'password'
  ];

  // Check for required fields
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Please Enter ' + field;
    }
  });

  return errors;
};