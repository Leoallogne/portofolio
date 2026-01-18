import React, { memo } from 'react';
import { Form, InputGroup, ButtonGroup, Button, Badge } from 'react-bootstrap';
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
    <div className="mb-5">
      {/* Search and View Toggle */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-4 mb-4">
        <div className="w-100" style={{ maxWidth: '500px' }}>
          <InputGroup className="border border-secondary border-opacity-25 rounded-pill overflow-hidden">
            <InputGroup.Text className="bg-dark border-0 text-secondary">
              <Search size={18} />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search projects..."
              className="bg-dark text-white border-0 shadow-none"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search projects"
            />
          </InputGroup>
        </div>
        
        <div className="d-flex gap-3">
          <ButtonGroup aria-label="View mode">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'outline-secondary'}
              onClick={() => onViewModeChange('grid')}
              aria-label="Grid view"
              className="d-flex align-items-center gap-2"
            >
              <Grid size={18} />
              <span className="d-none d-sm-inline">Grid</span>
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'outline-secondary'}
              onClick={() => onViewModeChange('list')}
              aria-label="List view"
              className="d-flex align-items-center gap-2"
            >
              <List size={18} />
              <span className="d-none d-sm-inline">List</span>
            </Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Sort options">
            <Button
              variant={sortBy === 'newest' ? 'primary' : 'outline-secondary'}
              onClick={() => onSortChange('newest')}
              aria-label="Sort by newest"
              className="d-flex align-items-center gap-2"
            >
              <SortDesc size={18} />
              <span className="d-none d-sm-inline">Newest</span>
            </Button>
            <Button
              variant={sortBy === 'oldest' ? 'primary' : 'outline-secondary'}
              onClick={() => onSortChange('oldest')}
              aria-label="Sort by oldest"
              className="d-flex align-items-center gap-2"
            >
              <SortAsc size={18} />
              <span className="d-none d-sm-inline">Oldest</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>

      {/* Category Filters */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        <span className="text-secondary d-flex align-items-center me-2">
          <Filter size={18} className="me-1" />
          Filter by:
        </span>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`btn btn-sm rounded-pill px-3 ${
              selectedCategory === category 
                ? 'btn-primary' 
                : 'btn-outline-secondary text-white'
            }`}
            aria-pressed={selectedCategory === category}
            aria-label={`Filter by ${category} category`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
});

export default ProjectFilters;
