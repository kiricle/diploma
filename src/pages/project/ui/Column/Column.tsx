import { Heading } from '@/ui/Heading/Heading';
import { CreateTask } from '../CreateTask/CreateTask';
import styles from './Column.module.scss';
import { EditColumn } from '../EditColumn/EditColumn';
import { Task } from '../Task/Task';

export const Column = ({ id, order, title, tasks, projectId }: Column) => {
    const sortedTasks = tasks.toSorted((a, b) => a.order - b.order);

    return (
        <div className={styles.column}>
            <Heading
                className={styles.heading}
                level={4}
            >
                {title}
                order:{order}
                <EditColumn
                    initialTitle={title}
                    id={id}
                    projectId={projectId}
                />
            </Heading>
            {sortedTasks.map((task) => (
                <Task
                    key={task.id}
                    {...task}
                />
            ))}

            <CreateTask columnId={id} />
        </div>
    );
};
