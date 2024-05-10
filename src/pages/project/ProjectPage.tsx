import styles from './ProjectPage.module.scss';

export const ProjectPage = ({ params }: { params: { projectId: string } }) => {
    return <main className={styles.main}>{params.projectId}</main>;
};
