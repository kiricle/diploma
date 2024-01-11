import { ReactNode } from 'react';
import styles from './Button.module.scss';
type Appearance = 'primary' | 'secondary' | 'danger';

export const Button = ({
    appearance,
    children,
}: {
    appearance: Appearance;
    children: ReactNode;
}) => {
    return <button className={styles.button + ' ' + styles.primary}>{children}</button>;
};
