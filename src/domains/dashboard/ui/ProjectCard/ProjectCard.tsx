import Link from 'next/link';
import styles from './ProjectCard.module.scss';

export const ProjectCard = ({
    name,
    href,
    className,
}: {
    name: string;
    href: string;
    className?: string;
}) => {
    return (
        <Link
            className={`${styles.card} ${className}`}
            href={href}
        >
            {name}
        </Link>
    );
};
