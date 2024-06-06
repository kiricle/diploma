interface Task {
    id: number;
    createdAt: string;
    updatedAt: string;
    columnId: number;
    title: string;
    order: number;
    comments: TaskComment[];
    description: string;
}

interface TaskComment {
    id: number;
    authorId: number;
    taskId: number;
    content: string;
    author: User;
    createdAt: string;
}

type CreateComment = Pick<TaskComment, 'content' | 'taskId'>;

type CreateTask = Pick<Task, 'columnId' | 'title'>;

type CreateTaskForm = Pick<Task, 'title'>;

type UpdateTask = Pick<Task, 'id' | 'columnId' | 'title'>;

type UpdateTaskForm = Pick<Task, 'title' | 'description'>;

type DeleteTask = Pick<Task, 'id' | 'columnId'>;
