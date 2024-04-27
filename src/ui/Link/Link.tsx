import { AnchorHTMLAttributes } from 'react';
import styles from './Link.module.scss';
import Link from 'next/link';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export const MyLink = ({ children, ...props }: LinkProps) => {
    return (
        <Link
            className={styles.link}
            {...props}
        >
            {children}
        </Link>
    );
};
