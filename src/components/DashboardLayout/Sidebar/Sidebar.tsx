'use client';
import { MyLink } from '@/ui/Link/Link';
import styles from './Sidebar.module.scss';
import { useParams } from 'next/navigation';
import { Heading } from '@/ui/Heading/Heading';

export const Sidebar = () => {
    const params = useParams<{ id: string }>();

    if (params === null) return <Heading level={2}>Error</Heading>;

    return (
        <aside className={styles.sidebar}>
            <MyLink href={`/c/project/${params.id}`}>Project</MyLink>
            <MyLink href={`/c/project/${params.id}/settings`}>Settings</MyLink>
        </aside>
    );
};
