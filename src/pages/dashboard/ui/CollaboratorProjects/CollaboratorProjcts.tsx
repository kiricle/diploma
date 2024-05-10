'use client';
import { projectService } from '@/services/project.service';
import { Heading } from '@/ui/Heading/Heading';
import { useQuery } from '@tanstack/react-query';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './CollaboratorProjects.module.scss';

export const CollaboratorProjects = () => {
    const { data, isPending, error, isError } = useQuery({
        queryKey: ['collaborator-projects'],
        queryFn: () => projectService.getCollaboratingProjects(),
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
                The project you are collaborating
            </Heading>
            {data?.map(({ id, name }) => (
                <ProjectCard
                    key={id}
                    className={styles.card}
                    name={name}
                    href={`c/project/${id}`}
                />
            ))}
            {data?.length === 0 && (
                <Heading
                    level={4}
                    className={styles.light}
                >
                    Seems like you don't have projects you are collaborating yet
                </Heading>
            )}
        </div>
    );
};
