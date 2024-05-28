import { Button } from '@/ui/Button/Button';
import styles from './CreateTask.module.scss';
import { useParams } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { useModal } from '@/hooks/useModal';
import { Heading } from '@/ui/Heading/Heading';
import { Input } from '@/ui/Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { projectService } from '@/services/project.service';

export const CreateTask = ({ columnId }: { columnId: number }) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['task'],
        mutationFn: (data: CreateTask) => projectService.createTask(data),
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['project'] }),
    });

    const { close, show, visible } = useModal();

    const { register, handleSubmit } = useForm<CreateTaskForm>();

    const onSubmit: SubmitHandler<CreateTaskForm> = (data) => {
        mutate({ columnId, title: data.title });
        close();
    };

    return (
        <>
            <Button
                onClick={() => show()}
                appearance="secondary"
                className={styles.button}
            >
                Create task
            </Button>

            <ModalWindow
                onClose={close}
                onSubmit={handleSubmit(onSubmit)}
                visible={visible}
                title="Create task"
            >
                <Input
                    content="Task name"
                    name="title"
                    register={register}
                    type="text"
                />
            </ModalWindow>
        </>
    );
};
