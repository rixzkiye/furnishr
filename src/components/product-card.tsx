import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader>
          <div className="aspect-square relative overflow-hidden rounded-md bg-muted">
            <Image
              src={product.images[0].url}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.images[0].hint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="text-lg font-headline leading-tight">{product.name}</CardTitle>
          <CardDescription className="mt-1">{product.category}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
            <p className="text-lg font-semibold text-foreground">{formatPrice(product.price)}</p>
            <Badge variant="secondary" className="hidden sm:inline-flex">View Details</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
