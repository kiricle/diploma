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

interface Column {
    id: number;
    order: number;
    title: string;
    tasks: Task[];
    projectId: number;
}

type CreateColumn = Pick<Column, 'projectId' | 'title'>;

type CreateColumnForm = Pick<Column, 'title'>;

type UpdateColumn = Pick<Column, 'id' | 'projectId' | 'title'>;

type UpdateColumnForm = Pick<Column, 'title'>;

type DeleteColumn = Pick<Column, 'id' | 'projectId'>;

interface Project {
    id: number;
    name: string;
    masterId: number;
    columns: Column[];
}

type ProjectResponse = Project[];

interface CreateProjectForm {
    name: string;
}
