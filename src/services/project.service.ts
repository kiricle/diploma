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

    async createColumn(data: CreateColumn) {
        const response = await axiosWithAuth.post<CreateColumn>(
            '/projects/column',
            data
        );

        return response.data;
    },

    async updateColumn(data: UpdateColumn) {
        const response = await axiosWithAuth.patch<UpdateColumn>(
            '/projects/column',
            data
        );

        return response.data;
    },

    async deleteColumn(data: DeleteColumn) {
        const response = await axiosWithAuth.delete<DeleteColumn>(
            '/projects/column',
            {
                data,
            }
        );

        return response.data;
    },

    async createTask(data: CreateTask) {
        const response = await axiosWithAuth.post<CreateTask>(
            '/projects/task',
            data
        );

        return response.data;
    },

    async updateTask(data: UpdateTask) {
        const response = await axiosWithAuth.patch<UpdateTask>(
            '/projects/task',
            data
        );

        return response.data;
    },

    async deleteTask(data: DeleteTask) {
        const response = await axiosWithAuth.delete<DeleteTask>(
            '/projects/task',
            { data }
        );

        return response.data;
    },
};
