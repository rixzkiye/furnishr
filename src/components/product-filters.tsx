import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const ProductFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
}: ProductFiltersProps) => {
  return (
    <div className="bg-card p-4 rounded-lg border shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
            <div>
                <label htmlFor="category-select" className="block text-sm font-medium text-muted-foreground mb-1">Category</label>
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
            <div>
                <label htmlFor="sort-select" className="block text-sm font-medium text-muted-foreground mb-1">Sort by</label>
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
