import { ReactNode } from 'react';
import styles from './Heading.module.scss';

type Level = 1 | 2 | 3 | 4 | 5;

export const Heading = ({
    level,
    children,
    className,
}: {
    level: Level;
    className?: string;
    children: ReactNode;
}) => {
    const tags: Record<Level, ReactNode> = {
        '1': (
            <h1 className={[styles.h1, className, styles.font].join(' ')}>
                {children}
            </h1>
        ),
        '2': (
            <h2 className={[styles.h2, className, styles.font].join(' ')}>
                {children}
            </h2>
        ),
        '3': (
            <h3 className={[styles.h3, className, styles.font].join(' ')}>
                {children}
            </h3>
        ),
        '4': (
            <h4 className={[styles.h4, className, styles.font].join(' ')}>
                {children}
            </h4>
        ),
        '5': (
            <h5 className={[styles.h5, className, styles.font].join(' ')}>
                {children}
            </h5>
        ),
    };

    return tags[level];
};
