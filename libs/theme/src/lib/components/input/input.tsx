import classNames from 'classnames';
import styles from './input.module.css';

/* eslint-disable-next-line */
export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  labelClassName?: string;
  label?: string;
  required?: boolean;
  errorMessage?: string;
}

export function Input(props: IInputProps) {
  const {
    containerClassName,
    labelClassName,
    id,
    label,
    required,
    errorMessage,
    ...rest
  } = props;
  return (
    <div className={classNames(styles['container'], containerClassName)}>
      <label
        htmlFor={id}
        className={classNames(styles['label'], labelClassName, {
          [styles['required']]: !!required,
        })}
      >
        {label}
      </label>
      <input id={id} className={styles['inputContent']} {...rest} />
      <div className={styles['formBorder']}></div>
      {errorMessage && (
        <div className={styles['errorMessage']}>{errorMessage}</div>
      )}
    </div>
  );
}

export default Input;
