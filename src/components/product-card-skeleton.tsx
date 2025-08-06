import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ProductCardSkeleton = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <Skeleton className="aspect-square w-full rounded-md" />
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-4 w-2/5" />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-6 w-1/4 hidden sm:block" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
