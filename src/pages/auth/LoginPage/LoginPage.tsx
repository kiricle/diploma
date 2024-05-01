'use client';
import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './LoginPage.module.scss';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';

export const LoginPage = () => {
    // !TODO make separate type
    const { register, handleSubmit, reset } = useForm<{
        email: string;
        password: string;
    }>({
        mode: 'onChange',
    });

    const { push } = useRouter();

    // !TODO types
    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: any) => authService.login(data),
        onSuccess: () => {
            push('/c/');
        },
        onError(error) {
            console.log(error);
        },
    });

    const onSubmit: SubmitHandler<{ email: string; password: string }> = (
        data
    ) => {
        mutate(data);
        reset();
    };

    return (
        <main className={styles.main}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <Button appearance="primary">Login</Button>
            </form>
        </main>
    );
};
