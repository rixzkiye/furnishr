"use client";

import Link from 'next/link';
import { Menu, Sofa } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from './ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

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
        <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Buka menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                    </SheetHeader>
                    <div className="grid gap-4 py-6">
                        <Link href="/" onClick={handleLinkClick} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                            Beranda
                        </Link>
                        <Link href="/products" onClick={handleLinkClick} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                            Produk
                        </Link>
                        <Link href="/about" onClick={handleLinkClick} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                            Tentang Kami
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
