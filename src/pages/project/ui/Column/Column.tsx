import { Button } from '@/ui/Button/Button';
import { Heading } from '@/ui/Heading/Heading';
import styles from './Column.module.scss';

export const Column = ({ id, order, title, tasks, projectId }: Column) => {

    return (
        <div className={styles.column}>
            <Heading
                className={styles.heading}
                level={4}
            >
                {title}
            </Heading>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={styles.task}
                >
                    <Heading level={5}>{task.title}</Heading>
                </div>
            ))}

            <Button
                onClick={() => undefined}
                appearance="secondary"
            >
                Create task
            </Button>
        </div>
    );
};
