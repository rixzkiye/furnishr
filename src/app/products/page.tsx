"use client";

import { useState, useMemo, useRef, useEffect } from 'react';
import { getProducts, Product } from '@/lib/products';
import ProductCard from '@/components/product-card';
import ProductFilters from '@/components/product-filters';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from '@/components/ui/button';
import ProductCardSkeleton from '@/components/product-card-skeleton';

const allProducts = getProducts();
const categories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))];
const ITEMS_PER_PAGE = 8;

export default function ProductsPage() {
  const [sortOption, setSortOption] = useState('name-asc');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const topOfProductsRef = useRef<HTMLDivElement>(null);

  // Simulate loading on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate a 1.5-second loading time

    return () => clearTimeout(timer);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    switch (sortOption) {
      case 'price-asc':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name-asc':
      default:
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [selectedCategory, sortOption, searchTerm]);
  
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, filteredAndSortedProducts]);

  // Reset to page 1 whenever filters change, except for pagination itself
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortOption, searchTerm]);


  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    // Only scroll if not in the initial loading state
    if (!loading && topOfProductsRef.current) {
        topOfProductsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage, loading]);
  
  const searchPreviewResults = useMemo(() => {
    if (!searchTerm) return [];
    // The filtering logic for the preview remains the same
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">Koleksi Kami</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Temukan furnitur buatan tangan yang dirancang untuk kenyamanan, gaya, dan umur panjang.
        </p>
      </div>

      <div ref={topOfProductsRef} className="scroll-mt-20">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchPreviewResults={searchPreviewResults}
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {loading ? (
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <h2 className="text-2xl font-semibold text-foreground">Tidak Ada Produk yang Ditemukan</h2>
            <p className="text-muted-foreground mt-2">Coba sesuaikan kriteria pencarian atau filter Anda.</p>
          </div>
        )}
      </div>

      {!loading && totalPages > 1 && (
        <div className="mt-12 flex justify-center">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <Button variant="outline" onClick={handlePreviousPage} disabled={currentPage === 1}>
                            <PaginationPrevious href="#" onClick={(e) => e.preventDefault()} />
                            <span className="hidden sm:inline ml-1">Sebelumnya</span>
                        </Button>
                    </PaginationItem>
                    <PaginationItem className="font-medium text-muted-foreground mx-4">
                        Halaman {currentPage} dari {totalPages}
                    </PaginationItem>
                    <PaginationItem>
                         <Button variant="outline" onClick={handleNextPage} disabled={currentPage === totalPages}>
                            <span className="hidden sm:inline mr-1">Selanjutnya</span>
                            <PaginationNext href="#" onClick={(e) => e.preventDefault()} />
                        </Button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
      )}
    </div>
  );
}
