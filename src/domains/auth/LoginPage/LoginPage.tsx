'use client';
import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './LoginPage.module.scss';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { AuthLink } from '../ui/AuthLink/AuthLink';

export const LoginPage = () => {
    const { register, handleSubmit, reset } = useForm<AuthForm>({
        mode: 'onChange',
    });

    const { push } = useRouter();

    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: AuthForm) => authService.login(data),
        onSuccess: () => {
            // push('/c/');
            console.log('success')
        },
        onError(error) {
            console.log(error);
        },
    });

    const onSubmit: SubmitHandler<AuthForm> = (
        data
    ) => {
        mutate(data);
        reset();
    };

    return (
        <main className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    content="Email"
                    type="email"
                    register={register}
                    name="email"
                />
                <Input
                    content="Password"
                    type="password"
                    register={register}
                    name="password"
                />
                <AuthLink href="/register">
                    Don't have an account? Sign up here!
                </AuthLink>
                <Button appearance="primary">Login</Button>
            </form>
        </main>
    );
};
