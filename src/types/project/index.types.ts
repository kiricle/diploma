interface Project {
    id: number;
    name: string;
    masterId: number;
    columns: Column[];
    collaborators: User[];
}

type DeleteProject = Pick<Project, 'id'>

type ChangeProjectName = Pick<Project, 'id' | 'name'>;

interface DeleteCollaborator extends Pick<User, 'id'> {
    projectId: number;
}

type ProjectResponse = Project[];

interface CreateProjectForm {
    name: string;
}

interface InviteCollaborator extends Pick<User, 'email'> {
    projectId: number;
}
