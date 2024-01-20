import classNames from 'classnames';
import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { title, className, ...rest } = props;
  return (
    <button {...rest} className={classNames(styles['button'], className)}>
      {title}
    </button>
  );
}

export default Button;
