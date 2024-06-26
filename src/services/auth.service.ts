import { axiosClassic } from '@/api/interceptors';
import {
    removeFromStorage,
    saveTokenStorage
} from './tokens.service';

export const authService = {
    async login(data: AuthForm) {
        const response = await axiosClassic.post<AuthResponse>(
            `/auth/login`,
            data
        );

        const { accessToken } = response.data;
        if (accessToken) saveTokenStorage(accessToken);

        return response;
    },

    async register(data: AuthForm) {
        const response = await axiosClassic.post<AuthResponse>(
            `/auth/register`,
            data
        );

        const { accessToken } = response.data;
        if (accessToken) saveTokenStorage(accessToken);

        return response;
    },

    async getNewTokens() {
        const response = await axiosClassic.post<AuthResponse>(
            '/auth/login/access-token'
        );

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken);

        return response;
    },

    async logout() {
        const response = await axiosClassic.post<boolean>('/auth/logout');

        if (response.data) removeFromStorage();

        return response;
    },
};
