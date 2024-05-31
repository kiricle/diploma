import { axiosWithAuth } from '@/api/interceptors';

export const taskService = {
    async createTask(data: CreateTask) {
        const response = await axiosWithAuth.post<CreateTask>('/tasks', data);

        return response.data;
    },

    async updateTask(data: UpdateTask) {
        const response = await axiosWithAuth.patch<UpdateTask>('/tasks', data);

        return response.data;
    },

    async deleteTask(data: DeleteTask) {
        const response = await axiosWithAuth.delete<DeleteTask>('/tasks', {
            data,
        });

        return response.data;
    },
};
