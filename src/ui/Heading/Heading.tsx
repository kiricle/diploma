import { ReactNode } from 'react';
import styles from './Heading.module.scss';

type Level = 1 | 2 | 3 | 4 | 5;

export const Heading = ({
    level,
    children,
}: {
    level: Level;
    children: ReactNode;
}) => {
    const tags: Record<Level, ReactNode> = {
        '1': <h1 className={styles.h1}>{children}</h1>,
        '2': <h2 className={styles.h2}>{children}</h2>,
        '3': <h3 className={styles.h3}>{children}</h3>,
        '4': <h4 className={styles.h4}>{children}</h4>,
        '5': <h5 className={styles.h5}>{children}</h5>,
    };

    return tags[level];
};
