import { ELoginFormFields } from './types';
import * as Yup from 'yup';

export const intialValues = {
  [ELoginFormFields.EMAIL]: '',
  [ELoginFormFields.PASSWORD]: '',
};

export const LoginValidation = Yup.object().shape({
  [ELoginFormFields.EMAIL]: Yup.string()
    .email('Please enter a valid email')
    .min(12, 'Email should be atleast 12 chars')
    .max(64, 'Email should be atleast 64 chars')
    .required('Required'),
  [ELoginFormFields.PASSWORD]: Yup.string()
    .min(
      8,
      'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
    )
    .required('Required'),
});
