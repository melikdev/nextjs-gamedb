import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import UserNavButton from './UserNavButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from './ui/separator';

export default async function Navbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className="max-w-7xl flex justify-between items-center mx-auto h-20 p-5 bg-white">
      <section className="flex gap-2 sm:gap-10">
        <Link className="flex items-center gap-2" href={'/'}>
          <span>logo</span>
          <h1 className="hidden">Gamecritic</h1>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Games</NavigationMenuTrigger>
              <NavigationMenuContent className="p-5 w-full flex flex-col gap-2">
                <h1 className="text-md">Explore Games</h1>
                <Separator />
                <Link href={'/games/all'} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Best games of all time
                  </NavigationMenuLink>
                </Link>
                <Link href={'/games/all'} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Newest games
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
      <section className="w-1/3">
        <Input placeholder="Search a game" />
      </section>
      <section>
        {!user && (
          <Button variant="outline" asChild>
            <Link href="/auth/register">Login / Register</Link>
          </Button>
        )}
        {user && <UserNavButton user={user} />}
      </section>
    </nav>
  );
}
