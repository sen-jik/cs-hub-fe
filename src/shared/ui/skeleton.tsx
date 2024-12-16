import { cn, SkeletonProps, Skeleton as NextUiSkeleton } from '@/packages/nextui';

const Skeleton = ({ className, children, classNames, ...props }: SkeletonProps) => {
  return (
    <NextUiSkeleton
      className={cn('bg-default-100', className)}
      classNames={{
        base: '!duration-1500 before:!duration-1500',
        ...classNames,
      }}
      {...props}
    >
      {children}
    </NextUiSkeleton>
  );
};

export { Skeleton };
