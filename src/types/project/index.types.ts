interface Task {
    id:number;
    createdAt: Date;
    updateAt: Date;
    columnId:number;
    title: string;
}

interface Column {
    id: number;
    order: number;
    title: string;
    tasks: Task[];
}

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