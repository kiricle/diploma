import { projectService } from '@/services/project.service';
import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { Confirm, Notify } from 'notiflix';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Collaborators.module.scss';
import TrashBin from './delete.png';
import { Heading } from '@/ui/Heading/Heading';

export const Collaborators = ({
    id,
    collaborators,
}: {
    id: number;
    collaborators: User[];
}) => {
    const queryClient = useQueryClient();

    const { mutate: inviteCollaborator } = useMutation({
        mutationKey: ['add-collaborator'],
        mutationFn: (data: InviteCollaborator) =>
            projectService.inviteCollaborator(data),
        onSuccess: () =>
            queryClient.refetchQueries({ queryKey: ['project-settings'] }),
        onError: (error) => {
            console.log(error);
            Notify.failure(error.message, { clickToClose: true });
        },
    });

    const { mutate: deleteCollaborator } = useMutation({
        mutationKey: ['delete-collaborator'],
        mutationFn: (data: DeleteCollaborator) =>
            projectService.deleteCollaborator(data),
        onSuccess: () =>
            queryClient.refetchQueries({ queryKey: ['project-settings'] }),
        onError: (error) => {
            console.log(error);
            Notify.failure(error.message, { clickToClose: true });
        },
    });

    const { register, handleSubmit, reset } = useForm<{ email: string }>();

    const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {
        inviteCollaborator({ email, projectId: id });
        reset();
    };

    return (
        <section className={styles.container}>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    content="Collaborator Email"
                    name="email"
                    register={register}
                />
                <Button
                    className={styles.button}
                    appearance="primary"
                >
                    Invite
                </Button>
            </form>
            <div className={styles.members}>
                <Heading level={3}>Members:</Heading>
                <div className={styles.members_container}>
                    {collaborators.map(({ email, id: collaboratorId }) => (
                        <span
                            className={styles.collaborator}
                            key={collaboratorId}
                        >
                            {email}{' '}
                            <button
                                onClick={() =>
                                    Confirm.show(
                                        'Confirm',
                                        'Are you sure you want to delete this collaborator?',
                                        'Yes',
                                        'No',
                                        () => {
                                            deleteCollaborator({
                                                projectId: id,
                                                id: collaboratorId,
                                            });
                                        },
                                        () => {}
                                    )
                                }
                            >
                                <Image
                                    src={TrashBin}
                                    width={16}
                                    height={16}
                                    alt="trash bin"
                                />
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
