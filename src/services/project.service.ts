import { axiosWithAuth } from '@/api/interceptors';

export const projectService = {
    async getOwnProjects() {
        const response = await axiosWithAuth.get<ProjectResponse>('/projects/own');

        return response.data;
    },

    async getCollaboratingProjects() {
        const response = await axiosWithAuth.get<ProjectResponse>('/projects/collaborator');

        return response.data;
    }
};
