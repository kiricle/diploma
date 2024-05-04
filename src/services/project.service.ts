import { axiosWithAuth } from '@/api/interceptors';

export const projectService = {
    // !TODO separate file types
    async getUserProject() {
        const response = await axiosWithAuth.get<{
            id: number;
            name: string;
            masterId: number;
        }[]>('/project/');

        return response.data;
    },
};
