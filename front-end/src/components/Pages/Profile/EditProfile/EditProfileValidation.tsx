import { INVALID_USERNAME } from "../../../../constants/constants";

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'username',
    'code'
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
    errors['code'] = INVALID_USERNAME;
  }
  return errors;
};