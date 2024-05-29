'use client';
import { projectService } from '@/services/project.service';
import { Heading } from '@/ui/Heading/Heading';
import { useMutation, useQuery } from '@tanstack/react-query';
import styles from './ProjectPage.module.scss';
import { Column } from './ui/Column/Column';
import { CreateColumn } from './ui/CreateColumn/CreateColumn';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export const ProjectPage = ({ params }: { params: { id: number } }) => {
    const { data, isError, isFetching, error, refetch } = useQuery({
        queryKey: ['project'],
        queryFn: () => projectService.getProjectInfo(params.id),
        retry: false,
        select: (data: Project) =>
            data.columns.sort((a, b) => a.order - b.order),
    });

    const { mutate: changeColumnOrder } = useMutation({
        mutationKey: ['column-order'],
        mutationFn: (data: ChangeColumnOrder) =>
            projectService.changeColumnOrder(data),
        onSuccess: () => refetch(),
    });

    if (isFetching) {
        return <Heading level={2}>Loading...</Heading>;
    }

    if (isError) {
        return <Heading level={2}>{error.message}</Heading>;
    }

    return (
        <main className={styles.main}>
            <DragDropContext
                onDragEnd={(dragEnd) => {
                    console.log(dragEnd)
                    if (
                        dragEnd.destination === null ||
                        dragEnd.destination === undefined
                    )
                        return;
                    changeColumnOrder({
                        id: Number(dragEnd.draggableId),
                        newOrder: dragEnd.destination.index + 1,
                    });
                }}
            >
                <Droppable
                    droppableId="columns"
                    direction="horizontal"
                >
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{ display: 'flex', gap: '50px' }}
                        >
                            {data?.map((col, index) => (
                                <Draggable
                                    key={col.id}
                                    draggableId={`${col.id}`}
                                    index={index}
                                >
                                    {(provided) => (
                                        <section
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            <Column {...col} />
                                        </section>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <CreateColumn />
        </main>
    );
};
