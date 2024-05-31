interface Task {
    id: number;
    createdAt: Date;
    updateAt: Date;
    columnId: number;
    title: string;
    order: number;
    description: string;
}

type CreateTask = Pick<Task, 'columnId' | 'title'>;

type CreateTaskForm = Pick<Task, 'title'>;

type UpdateTask = Pick<Task, 'id' | 'columnId' | 'title'>;

type UpdateTaskForm = Pick<Task, 'title' | 'description'>;

type DeleteTask = Pick<Task, 'id' | 'columnId'>;
