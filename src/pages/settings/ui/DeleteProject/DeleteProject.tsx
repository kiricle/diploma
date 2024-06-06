import { projectService } from '@/services/project.service';
import { Button } from '@/ui/Button/Button';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Confirm, Notify } from 'notiflix';

export const DeleteProject = ({ id }: { id: number }) => {
    const router = useRouter();

    const { mutate } = useMutation({
        mutationKey: ['delete-project'],
        mutationFn: (data: DeleteProject) => projectService.deleteProject(data),
        onSuccess: () => {
            router.push('/c/');
            Notify.success('The project deleted');
        },
    });

    return (
        <Button
            onClick={() =>
                Confirm.show(
                    'Confirm',
                    'Are you sure you want to delete the project?',
                    'Yes',
                    'No',
                    () => mutate({ id }),
                    () => {},
                    {
                        messageFontSize: '20px',
                        width: '500px',
                        okButtonBackground: 'red',
                    }
                )
            }
            appearance="danger"
        >
            Delete Project
        </Button>
    );
};
