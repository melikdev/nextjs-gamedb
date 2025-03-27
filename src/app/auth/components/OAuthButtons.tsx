'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

type OAuthButtonsProps = {
  className?: string;
  social?: string[];
} & React.ComponentPropsWithoutRef<'button'>;

const OAuthButtons = ({ className }: OAuthButtonsProps) => {
  return (
    <main className="flex gap-2 max-w-md flex-wrap">
      <Button
        onClick={() => signIn('google', { redirectTo: '/' })}
        className={cn(`flex justify-around gap-2`, className)}
        type="submit"
      >
        <FaGoogle />
        <span>Sign in with Google</span>
      </Button>
      <Button
        onClick={() => signIn('github', { redirectTo: '/' })}
        className={cn(`flex justify-around gap-2`, className)}
        type="submit"
      >
        <FaGithub />
        <span>Sign in with Github</span>
      </Button>
    </main>
  );
};

export default OAuthButtons;
