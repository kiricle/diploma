import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.scss';

type Appearance = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    appearance: Appearance;
    children: ReactNode;
}

export const Button = ({ appearance, children, ...props }: ButtonProps) => {
    return (
        <button
            className={styles.button + ' ' + styles[appearance]}
            {...props}
        >
            {children}
        </button>
    );
};
