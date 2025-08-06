import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ProductFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
  searchTerm,
  setSearchTerm,
}: ProductFiltersProps) => {
  return (
    <div className="bg-card p-4 rounded-lg border shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:flex-1">
             <label htmlFor="search-input" className="sr-only">Search</label>
            <Input
                id="search-input"
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
            />
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
