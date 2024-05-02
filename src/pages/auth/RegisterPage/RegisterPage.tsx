'use client';
import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './RegisterPage.module.scss';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { AuthLink } from '../ui/AuthLink/AuthLink';

export const RegisterPage = () => {
    // !TODO make separate type
    const { register, handleSubmit, reset } = useForm<{
        email: string;
        password: string;
    }>({
        mode: 'onChange',
    });

    // !TODO types
    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: any) => authService.register(data),
        onSuccess() {
            push('/login');
        },
        onError(error) {
            console.log(error);
        },
    });

    const { push } = useRouter();

    const onSubmit: SubmitHandler<{ email: string; password: string }> = (
        data
    ) => {
        mutate(data);
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
                <AuthLink href="/login">Already have an account?</AuthLink>
                <Button appearance="primary">Register</Button>
            </form>
        </main>
    );
};
