import styles from './verify-otp.module.css';

/* eslint-disable-next-line */
export interface VerifyOtpProps {}

export function VerifyOtp(props: VerifyOtpProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to VerifyOtp!</h1>
    </div>
  );
}

export default VerifyOtp;
