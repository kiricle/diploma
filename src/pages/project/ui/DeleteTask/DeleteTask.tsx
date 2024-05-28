import { projectService } from '@/services/project.service';
import { Button } from '@/ui/Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const DeleteTask = (deleteTask: DeleteTask) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['task-delete'],
        mutationFn: (data: DeleteTask) => projectService.deleteTask(data),
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['project'] }),
    });

    return (
        <Button
            onClick={() => {
                mutate(deleteTask);
            }}
            appearance="danger"
        >
            Delete
        </Button>
    );
};
