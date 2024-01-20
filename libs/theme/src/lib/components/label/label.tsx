import classNames from 'classnames';
import { string } from 'yup';
import styles from './label.module.css';

/* eslint-disable-next-line */
export interface LabelProps {
  label: string;
  onClick?: () => void;
  labelClassName?: string;
}

export function Label(props: LabelProps) {
  const { label, onClick, labelClassName } = props;
  return (
    <p
      className={classNames(styles['label'], labelClassName)}
      onClick={onClick}
    >
      {label}
    </p>
  );
}

export default Label;
