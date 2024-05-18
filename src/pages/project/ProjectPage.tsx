'use client';
import { useQuery } from '@tanstack/react-query';
import styles from './ProjectPage.module.scss';
import { projectService } from '@/services/project.service';
import { Heading } from '@/ui/Heading/Heading';
import { Column } from './ui/Column/Column';

export const ProjectPage = ({ params }: { params: { id: number } }) => {
    const { data, isError, isFetching, error } = useQuery({
        queryKey: ['project'],
        queryFn: () => projectService.getProjectInfo(params.id),
        retry: false,
    });

    if (isFetching) {
        return <Heading level={2}>Loading...</Heading>;
    }

    if (isError) {
        return <Heading level={2}>{error.message}</Heading>;
    }

    return (
        <main className={styles.main}>
            {data?.columns.map((col) => (
                <Column
                    key={col.id}
                    {...col}
                />
            ))}
        </main>
    );
};
