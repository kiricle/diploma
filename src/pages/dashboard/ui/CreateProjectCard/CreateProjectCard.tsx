import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { useModal } from '@/hooks/useModal';
import { projectService } from '@/services/project.service';
import { Input } from '@/ui/Input/Input';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './CreateProjectCard.module.scss';

export const CreateProjectCard = () => {
    const { refetch } = useQuery({
        queryKey: ['own-projects'],
    });

    const { mutate, isPending, isError } = useMutation({
        mutationKey: ['own-projects'],
        mutationFn: (data: CreateProjectForm) =>
            projectService.createNewProject(data),
        onSuccess: () => refetch(),
    });

    const { close, show, visible } = useModal();

    const { register, handleSubmit } = useForm<CreateProjectForm>();

    const onSubmit: SubmitHandler<CreateProjectForm> = (data) => {
        mutate(data);
        close();
    };

    if (isError) {
        return <h2>Error</h2>;
    }

    return (
        <>
            <button
                className={styles.button}
                onClick={show}
                disabled={isPending}
            >
                Create Project
            </button>

            <ModalWindow
                title="Create project"
                visible={visible}
                onClose={close}
                onSubmit={handleSubmit(onSubmit)}
            >
                <form>
                    <Input
                        name="name"
                        register={register}
                        content="Project name"
                        type="text"
                    />
                </form>
            </ModalWindow>
        </>
    );
};
