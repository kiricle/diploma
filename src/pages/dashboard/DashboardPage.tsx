'use client';
import { useQuery } from '@tanstack/react-query';
import styles from './DashboardPage.module.scss';
import { projectService } from '@/services/project.service';

export const DashboardPage = () => {
    const { data, isPending, error, isError } = useQuery({
        queryKey: ['projects'],
        queryFn: () => projectService.getUserProject(),
    });

    if (isPending) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Error</h1>;
    }

    return (
        <main className={styles.main}>
            {data?.map(({ id, masterId, name }) => (
                <h1 key={id}>{name}</h1>
            ))}
        </main>
    );
};
