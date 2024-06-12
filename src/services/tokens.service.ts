import Cookies from 'js-cookie';

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken',
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
    return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
    const result = Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        domain: 'https://diploma-be-production.up.railway.app/',
        sameSite: 'none',
        expires: 1,
    });

    console.log('res', result);
};

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
