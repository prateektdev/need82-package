import {
  INVALID_IMAGE
} from "../../../../constants/constants";

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'tourName',
    'noOfDays',
    'noOfNights',
    'price'
  ];

  // Check for required fields
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Please Enter ' + field;
    }
  });

  if (values['avatar'] && values['avatar'].length < 1) {
    errors['avatar'] = INVALID_IMAGE;
  }
  
  return errors;
};