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
        <nav>
          {/* Future navigation links can go here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
