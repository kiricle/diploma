import { columnService } from '@/services/column.service';
import { Button } from '@/ui/Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styles from "./DeleteColumn.module.scss";

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
        mutationFn: (data: DeleteColumn) => columnService.deleteColumn(data),
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
