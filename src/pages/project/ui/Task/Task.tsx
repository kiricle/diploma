import { Heading } from '@/ui/Heading/Heading';
import styles from './Task.module.scss';
import { useModal } from '@/hooks/useModal';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { Input } from '@/ui/Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { projectService } from '@/services/project.service';
import { DeleteTask } from '../DeleteTask/DeleteTask';

export const Task = (task: Task) => {
    const { close, show, visible } = useModal();

    const { register, handleSubmit } = useForm<UpdateTaskForm>();

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['task-update'],
        mutationFn: (data: UpdateTask) => projectService.updateTask(data),
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['project'] }),
    });

    const submitHandler: SubmitHandler<UpdateTaskForm> = (data) => {
        if (
            task.title === data.title &&
            task.description === data.description
        ) {
            close();
            return;
        }
        mutate({ ...data, id: task.id, columnId: task.columnId });
        close();
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
            >
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
