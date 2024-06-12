import { Input } from '@/ui/Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ChangeProjectName.module.scss';
import { Button } from '@/ui/Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { projectService } from '@/services/project.service';
import { Notify } from 'notiflix';

export const ChangeProjectName = ({
    id,
    projectName,
}: {
    id: number;
    projectName: string;
}) => {
    const { register, handleSubmit } = useForm<{ name: string }>();

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['project-name'],
        mutationFn: (data: ChangeProjectName) =>
            projectService.changeName(data),
        onSuccess: () => {
            Notify.success('The project name has been changed', {
                clickToClose: true,
            });
        },
        onError: (error) =>
            Notify.failure(`Error: ${error.message}`, { clickToClose: true }),
    });

    const onSubmit: SubmitHandler<{ name: string }> = (data) => {
        mutate({ id, name: data.name });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
        >
            <Input
                className={styles.input}
                content="Project name"
                name="name"
                register={register}
                defaultValue={projectName}
            />
            <Button
                appearance="primary"
                type="submit"
                className={styles.button}
            >
                Save changes
            </Button>
        </form>
    );
};
