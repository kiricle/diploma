import { axiosWithAuth } from '@/api/interceptors';

export const projectService = {
    async getOwnProjects() {
        const response = await axiosWithAuth.get<ProjectResponse>(
            '/projects/own'
        );

        return response.data;
    },

    async getCollaboratingProjects() {
        const response = await axiosWithAuth.get<ProjectResponse>(
            '/projects/collaborator'
        );

        return response.data;
    },

    async createNewProject(data: CreateProjectForm) {
        const response = await axiosWithAuth.post<CreateProjectForm>(
            '/projects/create',
            data
        );

        return response.data;
    },

    async getProjectInfo(id: number) {
        const response = await axiosWithAuth.get<Project>(`/projects/${id}`);

        return response.data;
    },

    async inviteCollaborator(data: InviteCollaborator) {
        const response = await axiosWithAuth.patch<InviteCollaborator>(
            '/projects/add-collaborator',
            data
        );

        return response.data;
    },

    async changeName(data: ChangeProjectName) {
        const response = await axiosWithAuth.patch<ChangeProjectName>(
            '/projects/update-name',
            data
        );

        return response.data;
    },

    async deleteProject(data: DeleteProject) {
        const response = await axiosWithAuth.delete<DeleteProject>(
            '/projects/',
            {
                data,
            }
        );

        return response.data;
    },

    async deleteCollaborator(data: DeleteCollaborator) {
        const response = await axiosWithAuth.delete<DeleteProject>(
            '/projects/collaborator',
            {
                data,
            }
        );

        return response.data;
    }
};
