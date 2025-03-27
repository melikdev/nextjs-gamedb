'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';
import { CircleUserIcon } from 'lucide-react';
import { User } from 'next-auth';

import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { signOut } from 'next-auth/react';

const UserNavButton = ({ user }: { user: User }) => {
  return (
    <Popover>
      <PopoverTrigger>
        {user.image ? (
          <Image src={user.image} alt="avatar" width={40} height={40} />
        ) : (
          <CircleUserIcon className="cursor-pointer" />
        )}
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2">
        <span>{user.name || user.email}</span>
        <Separator />
        <Button onClick={() => signOut()} variant="outline">
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default UserNavButton;
