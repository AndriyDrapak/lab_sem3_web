
import React from 'react';
import './Filters.css'; 

const CategoryFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-options">
      <div className="filter-option">
        <input
          type="checkbox"
          id="sedan"
          name="sedan"
          checked={filters.sedan}
          onChange={onFilterChange}
        />
        <label htmlFor="sedan">Sedan</label>
      </div>
      <div className="filter-option">
        <input
          type="checkbox"
          id="suv"
          name="suv"
          checked={filters.suv}
          onChange={onFilterChange}
        />
        <label htmlFor="suv">SUV</label>
      </div>
      <div className="filter-option">
        <input
          type="checkbox"
          id="sportcar"
          name="sportcar"
          checked={filters.sportcar}
          onChange={onFilterChange}
        />
        <label htmlFor="sportcar">Sportcar</label>
      </div>
    </div>
  );
};

export default CategoryFilters;
