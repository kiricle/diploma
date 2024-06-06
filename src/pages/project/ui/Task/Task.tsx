import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { useModal } from '@/hooks/useModal';
import { taskService } from '@/services/task.service';
import { Heading } from '@/ui/Heading/Heading';
import { Input } from '@/ui/Input/Input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DeleteTask } from '../DeleteTask/DeleteTask';
import styles from './Task.module.scss';
import { Comments } from '../Comments/Comments';
import { Notify } from 'notiflix';

export const Task = (task: Task) => {
    const { close, show, visible } = useModal();

    const { register, handleSubmit } = useForm<UpdateTaskForm>();

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['task-update'],
        mutationFn: (data: UpdateTask) => taskService.updateTask(data),
        onSuccess: () => {
            Notify.success('Task has been updated.', {
                clickToClose: true,
            });
            queryClient.refetchQueries({ queryKey: ['project'] });
        },
    });

    const submitHandler: SubmitHandler<UpdateTaskForm> = (data) => {
        if (
            task.title === data.title &&
            task.description === data.description
        ) {
            return;
        }
        mutate({ ...data, id: task.id, columnId: task.columnId });
    };

    return (
        <>
            <button
                onClick={show}
                key={task.id}
                className={styles.task}
            >
                <Heading level={5}>{task.title}</Heading>
            </button>

            <ModalWindow
                onClose={close}
                onSubmit={handleSubmit(submitHandler)}
                visible={visible}
                title="Edit Task"
                contentClassName={styles.modalContent}
                footer={<Comments {...task} />}
            >
                <Heading
                    className={styles.timing}
                    level={5}
                >
                    <span>
                        Created at:{' '}
                        {new Date(task.createdAt).toLocaleDateString('en-EN', {
                            hour: '2-digit',
                            year: 'numeric',
                            day: '2-digit',
                            month: 'long',
                            minute: '2-digit',
                            second: '2-digit',
                        })}
                    </span>
                    <span>
                        Updated at:{' '}
                        {new Date(task.updatedAt).toLocaleDateString('en-EN', {
                            hour: '2-digit',
                            year: 'numeric',
                            day: '2-digit',
                            month: 'long',
                            minute: '2-digit',
                            second: '2-digit',
                        })}
                    </span>
                </Heading>
                <Input
                    content="Title"
                    register={register}
                    name="title"
                    type="text"
                    defaultValue={task.title}
                />
                <Input
                    content="Description"
                    register={register}
                    name="description"
                    type="text"
                    defaultValue={task.description}
                />
                <DeleteTask {...task} />
            </ModalWindow>
        </>
    );
};
