'use client';
import { projectService } from '@/services/project.service';
import { Heading } from '@/ui/Heading/Heading';
import { useQuery } from '@tanstack/react-query';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './OwnProjects.module.scss';
import { CreateProjectCard } from '../CreateProjectCard/CreateProjectCard';

export const OwnProjects = () => {
    const { data, isPending, error, isError } = useQuery({
        queryKey: ['own-projects'],
        queryFn: () => projectService.getOwnProjects(),
        retry: false,
    });

    if (isPending) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <div className={styles.projects_container}>
            <Heading
                className={styles.heading}
                level={2}
            >
                Your Projects
            </Heading>
            {data?.map(({ id, name }) => (
                <ProjectCard
                    key={id}
                    className={styles.card}
                    name={name}
                    href={`c/project/${id}`}
                />
            ))}
            <CreateProjectCard />
        </div>
    );
};
