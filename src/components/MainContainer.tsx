import { cn } from '@/lib/utils';

type MainContainerProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const MainContainer = ({ children, className }: MainContainerProps) => {
  return (
    <div className={cn('max-w-7xl mx-auto p-5 h-full w-full', className)}>
      {children}
    </div>
  );
};

export default MainContainer;
