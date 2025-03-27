import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import OAuthButtons from '../components/OAuthButtons';
import { auth, signIn } from '@/auth';
import { redirect } from 'next/navigation';

const Register = async () => {
  const session = await auth();
  const user = session?.user;

  if (user) {
    redirect('/');
  }

  return (
    <main className="flex justify-center items-center h-[calc(100vh-80px)]">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create account or sign in</CardTitle>
          <CardDescription className="flex flex-col gap-3">
            Enter your email below to continue
            <form
              className="flex flex-col gap-3"
              action={async (formData) => {
                'use server';
                await signIn('resend', formData, { redirectTo: '/' });
              }}
            >
              <Input name="email" placeholder="Email" />
              <Button className="w-full">Create account</Button>
            </form>
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex">
          <OAuthButtons />
        </CardContent>
      </Card>
    </main>
  );
};

export default Register;
