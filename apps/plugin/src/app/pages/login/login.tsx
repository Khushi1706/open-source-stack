import { Button, Card, Input, Label } from '@oss/theme';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { intialValues, LoginValidation } from './config';
import styles from './login.module.css';
import { ELoginFormFields } from './types';
import logo from './../../../assets/oss.png';
import React from 'react';
import { MessageType } from '@oss/api-interfaces';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      ...intialValues,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    enableReinitialize: true,
    validationSchema: LoginValidation,
  });

  const { getFieldProps, errors, touched } = formik;

  const [isEnabled, setIsEnabled] = React.useState(false);

  const onClick = () => {
    chrome.runtime.sendMessage(
      {
        type: 'TOGGLE_STATUS',
        isEnabled: !isEnabled,
      },
      function (response) {
        if (!chrome.runtime.lastError) {
          // if you have any response
          console.log('response', response);
        } else {
          // if your document doesn’t have any response, it’s fine but you should actually handle
          // it and we are doing this by carefully examining chrome.runtime.lastError
          console.log('last error', chrome.runtime.lastError);
        }
      }
    );
  };

  return (
    <Card>
      <div className={styles['container']}>
        <div className={styles['logoContainer']}>
          <Label label="OSS" labelClassName={styles['ossLogo']} />
        </div>
        <Input
          label="Email"
          id="email"
          {...getFieldProps(ELoginFormFields.EMAIL)}
          errorMessage={
            (touched[ELoginFormFields.EMAIL] &&
              errors[ELoginFormFields.EMAIL]) as string
          }
          required
          type="email"
          inputMode="email"
        />
        <div className={styles['passwordContainer']}>
          <Input
            label="Password"
            id="password"
            {...getFieldProps(ELoginFormFields.PASSWORD)}
            errorMessage={
              (touched[ELoginFormFields.PASSWORD] &&
                errors[ELoginFormFields.PASSWORD]) as string
            }
            required
            type="password"
            inputMode="text"
          />
          <Label
            label="Forgot Password?"
            onClick={() => {
              navigate('/forgot-password');
            }}
            labelClassName={styles['forgotPass']}
          />
        </div>
        <Button
          title="Login"
          onClick={() => {
            // formik.handleSubmit()
            onClick();
          }}
          className={styles['loginButton']}
        />
        <Label
          label="Don't have account yet?"
          onClick={() => {
            navigate('/register');
          }}
          labelClassName={styles['gotoRegister']}
        />
      </div>
    </Card>
  );
}

export default Login;
