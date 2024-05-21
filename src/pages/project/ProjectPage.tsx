'use client';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { useModal } from '@/hooks/useModal';
import { projectService } from '@/services/project.service';
import { Button } from '@/ui/Button/Button';
import { Heading } from '@/ui/Heading/Heading';
import { Input } from '@/ui/Input/Input';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ProjectPage.module.scss';
import { Column } from './ui/Column/Column';

export const ProjectPage = ({ params }: { params: { id: number } }) => {
    const { data, isError, isFetching, error, refetch } = useQuery({
        queryKey: ['project'],
        queryFn: () => projectService.getProjectInfo(params.id),
        retry: false,
    });

    const { mutate } = useMutation({
        mutationKey: ['create-column'],
        mutationFn: (data: CreateColumn) => projectService.createColumn(data),
        retry: false,
        onSuccess: () => refetch(),
    });

    const { close, show, visible } = useModal();

    const { register, handleSubmit } = useForm<CreateColumnForm>();

    if (isFetching) {
        return <Heading level={2}>Loading...</Heading>;
    }

    if (isError) {
        return <Heading level={2}>{error.message}</Heading>;
    }

    const onSubmit: SubmitHandler<CreateColumnForm> = (data) => {
        mutate({ order: 5, projectId: Number(params.id), title: data.title });
        close();
    };

    return (
        <main className={styles.main}>
            {data?.columns.map((col) => (
                <Column
                    key={col.id}
                    {...col}
                />
            ))}
            <Button
                onClick={() => show()}
                appearance="primary"
            >
                Create column
            </Button>

            <ModalWindow
                onClose={close}
                onSubmit={handleSubmit(onSubmit)}
                title="Create Column"
                visible={visible}
            >
                <Input
                    content="Column name"
                    name="title"
                    register={register}
                    type="text"
                />
            </ModalWindow>
        </main>
    );
};
