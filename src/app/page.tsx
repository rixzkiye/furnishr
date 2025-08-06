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

const products = getProducts();
const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [sortOption, setSortOption] = useState('name-asc');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const topOfProductsRef = useRef<HTMLDivElement>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

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

  // Reset to page 1 whenever filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortOption, searchTerm]);


  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    // Only scroll if it's not the initial render on page 1
    if (currentPage > 0 && topOfProductsRef.current) {
        topOfProductsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">Our Collection</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover handcrafted furniture designed for comfort, style, and longevity.
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
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <h2 className="text-2xl font-semibold text-foreground">No Products Found</h2>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <Button variant="outline" onClick={handlePreviousPage} disabled={currentPage === 1}>
                            <PaginationPrevious href="#" onClick={(e) => e.preventDefault()} />
                            <span className="hidden sm:inline ml-1">Previous</span>
                        </Button>
                    </PaginationItem>
                    <PaginationItem className="font-medium text-muted-foreground mx-4">
                        Page {currentPage} of {totalPages}
                    </PaginationItem>
                    <PaginationItem>
                         <Button variant="outline" onClick={handleNextPage} disabled={currentPage === totalPages}>
                            <span className="hidden sm:inline mr-1">Next</span>
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
