import React from "react";
import { FilterType } from "../types/EmailType";

interface FilterButtonProps {
    label: string;
    filter: FilterType;
    activeFilter: FilterType;
    setFilter: (filter: FilterType) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, filter, activeFilter, setFilter }) => {
    const isActive = filter === activeFilter;

    return (
        <button
            onClick={() => setFilter(filter)}
            className={`mx-1 px-2 py-1 text-sm font-bold text-text border-2
                ${isActive ? "rounded-full border-border bg-background" : "border-transparent text-text"}
                 hover:bg-filterButton transition-all rounded-full`
            }
        >
            {label}
        </button>
    )
};

export default FilterButton;