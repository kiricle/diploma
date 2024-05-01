import { axiosClassic } from '@/api/interceptors';
import { saveTokenStorage, removeFromStorage } from './tokens.service';

export const authService = {
    // !TODO change data type
    async login(data: any) {
        const response = await axiosClassic.post<any>(`/auth/login`, data);

        const { accessToken } = response.data;
        if (accessToken) saveTokenStorage(accessToken);

        return response;
    },

    async register(data:any) {
        const response = await axiosClassic.post<any>(`/auth/register`, data);

        const { accessToken } = response.data;
        if (accessToken) saveTokenStorage(accessToken);

        return response;
    },

    async getNewTokens() {
        const response = await axiosClassic.post<any>(
            '/auth/login/access-token'
        );

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken);

        return response;
    },

    async logout() {
        const response = await axiosClassic.post<boolean>('/auth/logout');

        if(response.data) removeFromStorage();

        return response;
    }
};