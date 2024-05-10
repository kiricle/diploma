interface Project {
    id: number;
    name: string;
    masterId: number;
}


type ProjectResponse = Project[];

interface CreateProjectForm {
    name: string;
}