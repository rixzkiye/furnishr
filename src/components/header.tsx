import Link from 'next/link';
import { Sofa } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Sofa className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline tracking-tight text-foreground">
            Furnishr Static
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Beranda
            </Link>
            <Link href="/products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Produk
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Tentang Kami
            </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
