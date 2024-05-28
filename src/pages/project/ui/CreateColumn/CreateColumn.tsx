import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { useModal } from '@/hooks/useModal';
import { projectService } from '@/services/project.service';
import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

export const CreateColumn = () => {
    const params = useParams<{ id: string }>();

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['create-column'],
        mutationFn: (data: CreateColumn) => projectService.createColumn(data),
        retry: false,
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['project'] }),
    });

    const { close, show, visible } = useModal();

    const { register, handleSubmit } = useForm<CreateColumnForm>();

    const onSubmit: SubmitHandler<CreateColumnForm> = (data) => {
        mutate({ projectId: Number(params?.id), title: data.title });
        close();
    };

    return (
        <>
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
        </>
    );
};
