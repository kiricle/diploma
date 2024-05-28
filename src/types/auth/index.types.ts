interface AuthForm {
    email: string;
    password: string;
}

interface User {
    id: number;
    email: string;
    name?: string;
}

interface AuthResponse {
    user: User;
    accessToken: string;
}
