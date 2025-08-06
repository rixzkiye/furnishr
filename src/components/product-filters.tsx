import { useState, useRef, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverAnchor } from '@/components/ui/popover';
import { Product } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchPreviewResults: Product[];
}

const ProductFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
  searchTerm,
  setSearchTerm,
  searchPreviewResults,
}: ProductFiltersProps) => {
  const [inputValue, setInputValue] = useState(searchTerm);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const showPreview = searchTerm.length > 0 && isPopoverOpen;

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setSearchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (!isPopoverOpen) {
        setIsPopoverOpen(true);
    }
  };

  return (
    <div className="bg-card p-4 rounded-lg border shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:flex-1" ref={searchContainerRef}>
            <Popover open={showPreview} onOpenChange={setIsPopoverOpen}>
              <PopoverAnchor asChild>
                <div>
                  <label htmlFor="search-input" className="sr-only">Search</label>
                  <Input
                      id="search-input"
                      type="text"
                      placeholder="Search products..."
                      value={inputValue}
                      onChange={handleInputChange}
                      onFocus={() => setIsPopoverOpen(true)}
                      className="w-full"
                      autoComplete="off"
                  />
                </div>
              </PopoverAnchor>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <div className="flex flex-col gap-1">
                  {searchPreviewResults.length > 0 ? (
                    searchPreviewResults.map(product => (
                      <Link key={product.id} href={`/products/${product.slug}`} className="hover:bg-accent" onClick={() => setIsPopoverOpen(false)}>
                        <div className="flex items-center gap-4 p-2">
                          <Image 
                            src={product.images[0].url} 
                            alt={product.name} 
                            width={40} 
                            height={40} 
                            className="rounded-md object-cover"
                            data-ai-hint={product.images[0].hint}
                          />
                          <div>
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.category}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="p-4 text-sm text-muted-foreground text-center">No products found.</p>
                  )}
                </div>
              </PopoverContent>
            </Popover>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="w-full">
                <label htmlFor="category-select" className="sr-only">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category-select" className="w-full sm:w-[200px]">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="w-full">
                <label htmlFor="sort-select" className="sr-only">Sort by</label>
                <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger id="sort-select" className="w-full sm:w-[200px]">
                        <SelectValue placeholder="Sort products" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                        <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                        <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    </div>
  );
};

export default ProductFilters;
