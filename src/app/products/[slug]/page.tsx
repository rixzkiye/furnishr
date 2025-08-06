import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProductImageCarousel from '@/components/product-image-carousel';
import WhatsappIcon from '@/components/whatsapp-icon';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  const whatsappMessage = encodeURIComponent(`I'm interested in your product: ${product.name}`);
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Collection
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <ProductImageCarousel images={product.images} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-foreground">{product.name}</h1>
          <p className="text-2xl mt-2 text-primary">{formatPrice(product.price)}</p>
          <Separator className="my-6" />
          <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold font-headline text-foreground">Specifications</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="flex">
                  <span className="font-medium text-foreground w-32 shrink-0">{key}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pt-8">
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="w-5 h-5 mr-2" />
                Contact on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
