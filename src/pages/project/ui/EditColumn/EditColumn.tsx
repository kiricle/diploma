import { useModal } from '@/hooks/useModal';
import styles from './EditColumn.module.scss';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { Input } from '@/ui/Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { projectService } from '@/services/project.service';
import { DeleteColumn } from '../DeleteColumn/DeleteColumn';

export const EditColumn = ({
    initialTitle,
    projectId,
    id,
}: {
    initialTitle: string;
    id: number;
    projectId: number;
}) => {
    const { close, show, visible } = useModal();

    const { register, handleSubmit } = useForm<UpdateColumnForm>();

    const [title, setTitle] = useState(initialTitle);

    const queryClient = useQueryClient();

    const { mutate: updateColumn } = useMutation({
        mutationKey: ['column-update'],
        mutationFn: (data: UpdateColumn) => projectService.updateColumn(data),
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['project'] }),
    });

    const onSubmit: SubmitHandler<UpdateColumnForm> = (data) => {
        if (data.title === initialTitle) {
            close();
            return;
        }
        updateColumn({ id, title: data.title, projectId });
        close();
    };

    return (
        <>
            <button
                onClick={show}
                className={styles.edit}
            >
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </button>

            <ModalWindow
                onClose={close}
                visible={visible}
                onSubmit={handleSubmit(onSubmit)}
                title="Edit column"
            >
                <div className={styles.content}>
                    <Input
                        content="Column title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        register={register}
                        value={title}
                    />
                    <DeleteColumn
                        id={id}
                        projectId={projectId}
                    />
                </div>
            </ModalWindow>
        </>
    );
};
