import { Heading } from '@/ui/Heading/Heading';
import styles from './Column.module.scss';

export const Column = ({ title, tasks }: Column) => {
    return (
        <div className={styles.column}>
            <Heading
                className={styles.heading}
                level={2}
            >
                {title}
            </Heading>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={styles.task}
                >
                    <Heading level={3}>{task.title}</Heading>
                </div>
            ))}
        </div>
    );
};
