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
