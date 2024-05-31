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
};
