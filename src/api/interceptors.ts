import { authService } from '@/services/auth.service';
import { getAccessToken } from '@/services/tokens.service';
import axios, { type CreateAxiosDefaults } from 'axios';
import { removeFromStorage } from './../services/tokens.service';
import { errorCatch } from './error';

const options: CreateAxiosDefaults = {
    // baseURL: 'https://diploma-be-h706.onrender.com/api',
    baseURL: 'http://localhost:9000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
    const accessToken = getAccessToken();

    if (config?.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
});

axiosWithAuth.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;

        if (
            (error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                await authService.getNewTokens();
                return axiosWithAuth.request(originalRequest);
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') removeFromStorage();
            }
        }

        throw error;
    }
);

export { axiosClassic, axiosWithAuth };
