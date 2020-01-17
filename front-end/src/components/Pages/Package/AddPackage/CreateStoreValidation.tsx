import {
  INVALID_STORE_TITLE,
  INVALID_STORE_SUB_TITLE,
  INVALID_TAGS,
  INVALID_IMAGE
} from "../../../../constants/constants";

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'title',
    'sub_title',
    'tags',
  ];

  // Check for required fields
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Please Enter ' + field;
    }
  });

  if (values['title'] && values['title'].length < 3) {
    errors['title'] = INVALID_STORE_TITLE;
  }

  if (values['sub_title'] && values['sub_title'].length < 3) {
    errors['sub_title'] = INVALID_STORE_SUB_TITLE;
  }

  if (values['tags'] && values['tags'].length < 1) {
    errors['tags'] = INVALID_TAGS;
  }

  if (values['avatar'] && values['avatar'].length < 1) {
    errors['avatar'] = INVALID_IMAGE;
  }
  
  return errors;
};