import React from "react";
import { FilterType } from "../types/EmailType";
import FilterButton from "./FilterButton"

interface FilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const FilterBar: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center p-4">
      <span className="mr-4 text-sm font-bold text-text">Filter By:</span>
      <FilterButton
        label="All"
        filter="all"
        activeFilter={filter}
        setFilter={setFilter}
      />

      <FilterButton
        label="Unread"
        filter="unread"
        activeFilter={filter}
        setFilter={setFilter}
      />

      <FilterButton
        label="Read"
        filter="read"
        activeFilter={filter}
        setFilter={setFilter}
      />

      <FilterButton
        label="Favorites"
        filter="favorites"
        activeFilter={filter}
        setFilter={setFilter}
      />

    </div>
  );
};


export default FilterBar;
