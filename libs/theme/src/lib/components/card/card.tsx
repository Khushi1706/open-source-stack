import { ReactNode } from 'react';
import styles from './card.module.css';

/* eslint-disable-next-line */
export interface ICardProps {
  children: ReactNode;
}

export function Card(props: ICardProps) {
  return (
    <div className={styles['card']}>
      <div className={styles['cardContent']}>{props.children}</div>
    </div>
  );
}

export default Card;
