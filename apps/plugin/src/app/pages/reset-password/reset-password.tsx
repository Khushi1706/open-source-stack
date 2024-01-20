import styles from './reset-password.module.css';

/* eslint-disable-next-line */
export interface ResetPasswordProps {}

export function ResetPassword(props: ResetPasswordProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ResetPassword!</h1>
    </div>
  );
}

export default ResetPassword;
