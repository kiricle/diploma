'use client';
import { projectService } from '@/services/project.service';
import { Heading } from '@/ui/Heading/Heading';
import { useQuery } from '@tanstack/react-query';
import styles from './ProjectPage.module.scss';
import { Column } from './ui/Column/Column';
import { CreateColumn } from './ui/CreateColumn/CreateColumn';

export const ProjectPage = ({ params }: { params: { id: number } }) => {
    const { data, isError, isFetching, error, refetch } = useQuery({
        queryKey: ['project'],
        queryFn: () => projectService.getProjectInfo(params.id),
        retry: false,
    });

    const sortedColumns = data?.columns.toSorted((a, b) => a.order - b.order);

    if (isFetching) {
        return <Heading level={2}>Loading...</Heading>;
    }

    if (isError) {
        return <Heading level={2}>{error.message}</Heading>;
    }

    return (
        <main className={styles.main}>
            {sortedColumns?.map((col) => (
                <Column
                    key={col.id}
                    {...col}
                />
            ))}
            <CreateColumn />
        </main>
    );
};
