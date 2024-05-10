'use client';
import { authService } from '@/services/auth.service';
import { Button } from '@/ui/Button/Button';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const LogoutButton = () => {
    const router = useRouter();

    const { mutate } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => router.push('/login'),
    });

    return (
        <Button
            appearance="primary"
            onClick={() => mutate()}
        >
            Logout
        </Button>
    );
};
