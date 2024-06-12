import { Input } from '@/ui/Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Comments.module.scss';
import { Button } from '@/ui/Button/Button';
import { useMutation, useQuery } from '@tanstack/react-query';
import { taskService } from '@/services/task.service';
import { Comment } from '../Comment/Comment';
import { Heading } from '@/ui/Heading/Heading';

export const Comments = (task: Task) => {
    const { register, handleSubmit, reset } = useForm<{ content: string }>();

    const { data, isFetching, isError, error, refetch } = useQuery({
        queryKey: ['comments', task.id],
        queryFn: () => taskService.getComments(task.id),
    });

    const { mutate } = useMutation({
        mutationKey: ['comment'],
        mutationFn: (data: CreateComment) => taskService.addComment(data),
        onSuccess: () => refetch(),
    });

    const onSubmit: SubmitHandler<{ content: string }> = (data) => {
        mutate({ content: data.content, taskId: task.id });
        reset();
    };

    if (isError) {
        return <Heading level={2}>{error.message}</Heading>;
    }

    if (isFetching) {
        return <Heading level={2}>Loading...</Heading>;
    }

    if (!data) {
        return <Heading level={2}>Something went wrong!</Heading>;
    }

    const sortedComments = data.toSorted(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return (
        <section className={styles.comments_section}>
            <Heading level={3}>Comments</Heading>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.comment_form}
            >
                <Input
                    content="Write your comment"
                    name="content"
                    register={register}
                />
                <Button
                    style={{ alignSelf: 'start' }}
                    appearance="primary"
                >
                    Comment
                </Button>
            </form>
            <div className={styles.container}>
                {data.length > 0 &&
                    sortedComments.map((com) => (
                        <Comment
                            key={com.id}
                            {...com}
                        />
                    ))}
            </div>
        </section>
    );
};
