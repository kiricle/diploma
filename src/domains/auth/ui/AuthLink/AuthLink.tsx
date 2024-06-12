import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './AuthLink.module.scss';

interface AuthLinkProps extends ComponentPropsWithoutRef<'a'> {
    href: string;
    children: ReactNode;
}

export const AuthLink = ({ className, children, ...props }: AuthLinkProps) => {
    return (
        <Link
            className={styles.link}
            {...props}
        >
            {children}
        </Link>
    );
};
