import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    content: string;
}

export const Input = ({ name, type, content, ...props }: InputProps) => {
    return (
        <label
            className={styles.label}
            htmlFor={name}
        >
            {content}
            <input
                className={styles.input}
                id={name}
                type={type}
                {...props}
            />
        </label>
    );
};
