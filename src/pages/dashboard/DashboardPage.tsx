import styles from './DashboardPage.module.scss';
import { CollaboratorProjects } from './ui/CollaboratorProjects/CollaboratorProjcts';
import { OwnProjects } from './ui/OwnProjects/OwnProjects';

export const DashboardPage = () => {
    return (
        <main className={styles.main}>
            <OwnProjects />
            <CollaboratorProjects />
        </main>
    );
};
