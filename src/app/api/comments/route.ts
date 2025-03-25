import { auth } from '@/auth';

export async function GET() {
  try {
    const session = await auth();
    const user = session?.user;

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
