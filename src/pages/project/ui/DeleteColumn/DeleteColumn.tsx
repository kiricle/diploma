import { projectService } from '@/services/project.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styles from "./DeleteColumn.module.scss"
import { Button } from '@/ui/Button/Button';

export const DeleteColumn = ({
    id,
    projectId,
}: {
    id: number;
    projectId: number;
}) => {
    const queryClient = useQueryClient();

    const { mutate: deleteColumn } = useMutation({
        mutationKey: ['column-delete'],
        mutationFn: (data: DeleteColumn) => projectService.deleteColumn(data),
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['project'] }),
    });

    return (
        <Button
            className={styles.button}
            onClick={() => {
                deleteColumn({ id, projectId });
                close();
            }}
            appearance='danger'
        >
            Delete Column
        </Button>
    );
};
