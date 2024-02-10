import { FC, ReactNode } from 'react';
import styles from './styles.module.css';

export const LoadingCircle: FC = (): ReactNode => {
  return <div className={styles.loading} />;
};
