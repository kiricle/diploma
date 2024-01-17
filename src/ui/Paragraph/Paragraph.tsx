import { ReactNode } from 'react';
import styles from './Paragraph.module.scss';

export const Paragraph = ({
    children,
    italic,
    bold
}: {
    children: ReactNode;
    italic?: boolean;
    bold?: boolean;
}) => {
    return (
        <p className={[styles.p, italic && styles.italic, bold && styles.bold].join(' ')}>
            {children}
        </p>
    );
};
