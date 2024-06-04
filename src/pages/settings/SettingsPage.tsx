'use client';
import { projectService } from '@/services/project.service';
import { Heading } from '@/ui/Heading/Heading';
import { useQuery } from '@tanstack/react-query';
import styles from './SettingsPage.module.scss';
import { ChangeProjectName } from './ui/ChangeProjectName/ChangeProjectName';
import { Collaborators } from './ui/Collaborators/Collaborators';
import { DeleteProject } from './ui/DeleteProject/DeleteProject';
import { MyLink } from '@/ui/Link/Link';

export const SettingsPage = ({
    params,
}: {
    params: {
        id: string;
    };
}) => {
    const { data, isFetching, isError, error } = useQuery({
        queryKey: ['project-settings'],
        queryFn: () => projectService.getProjectInfo(Number(params.id)),
        retry: false,
    });

    if (isFetching) {
        return <Heading level={2}>Loading...</Heading>;
    }

    if (isError) {
        return (
            <>
                <Heading level={2}>Error</Heading>
                <MyLink
                    style={{ alignSelf: 'center' }}
                    href="/c/"
                >
                    Go to the dashboard
                </MyLink>
            </>
        );
    }

    if (data === undefined) {
        return <Heading level={2}>Nothing found</Heading>;
    }

    return (
        <main className={styles.main}>
            <ChangeProjectName
                id={Number(params.id)}
                projectName={data.name}
            />
            <Collaborators
                collaborators={data.collaborators}
                id={Number(params.id)}
            />
            <DeleteProject id={Number(params.id)} />
        </main>
    );
};
