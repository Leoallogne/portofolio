import React, { memo } from 'react';
import { Search, Filter, Grid, List, SortAsc, SortDesc } from 'lucide-react';

const ProjectFilters = memo(({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="mb-8 md:mb-12">
      {/* Search and View Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
        <div className="w-full md:max-w-lg">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="search"
              placeholder="Search projects by title, tech stack, or description..."
              className="block w-full pl-10 pr-4 py-3 bg-slate-900 border border-white/10 rounded-full text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search projects"
            />
          </div>
        </div>

        <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <div className="flex bg-slate-900 rounded-lg p-1 border border-white/10 flex-shrink-0" role="group" aria-label="View mode">
            <button
              onClick={() => onViewModeChange('grid')}
              aria-label="Grid view"
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${viewMode === 'grid'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <Grid size={18} />
              <span className="hidden sm:inline text-sm font-medium">Grid</span>
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              aria-label="List view"
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${viewMode === 'list'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <List size={18} />
              <span className="hidden sm:inline text-sm font-medium">List</span>
            </button>
          </div>

          <div className="flex bg-slate-900 rounded-lg p-1 border border-white/10 flex-shrink-0" role="group" aria-label="Sort options">
            <button
              onClick={() => onSortChange('newest')}
              aria-label="Sort by newest"
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${sortBy === 'newest'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <SortDesc size={18} />
              <span className="hidden sm:inline text-sm font-medium">Newest</span>
            </button>
            <button
              onClick={() => onSortChange('oldest')}
              aria-label="Sort by oldest"
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${sortBy === 'oldest'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <SortAsc size={18} />
              <span className="hidden sm:inline text-sm font-medium">Oldest</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-6 md:mb-8">
        <span className="text-slate-400 flex items-center mr-2 text-sm font-medium">
          <Filter size={16} className="mr-2" />
          Filter by:
        </span>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedCategory === category
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5'
                }`}
              aria-pressed={selectedCategory === category}
              aria-label={`Filter by ${category} category`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectFilters;
