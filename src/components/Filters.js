import { FilterX } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

const Filters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const onClearFilters = () => {
        setFilters({
            status: "",
            date: "",
            shift: "",
            area: "",
        });
    };

    return (
        <div className="flex items-center justify-start gap-2 flex-wrap">
            <select
                name="status"
                onChange={handleChange}
                value={filters.status}
                className="rounded-lg p-2 shadow"
            >
                <option value="">All Statuses</option>
                <option value="CONFIRMED">Confirmed</option>
                <option value="NOT CONFIRMED">Not Confirmed</option>
                <option value="SEATED">Seated</option>
                <option value="CHECKED OUT">Checked Out</option>
            </select>

            <select
                name="shift"
                onChange={handleChange}
                value={filters.shift}
                className="rounded-lg p-2 shadow"
            >
                <option value="">All Shifts</option>
                <option value="BREAKFAST">Breakfast</option>
                <option value="LUNCH">Lunch</option>
                <option value="DINNER">Dinner</option>
            </select>
            <select
                name="area"
                onChange={handleChange}
                value={filters.area}
                className="rounded-lg p-2 shadow"
            >
                <option value="">All Areas</option>
                <option value="BAR">Bar</option>
                <option value="MAIN ROOM">Main Room</option>
            </select>
            <Input
                type="date"
                name="date"
                onChange={handleChange}
                value={filters.date}
                className="w-fit p-2 rounded-lg shadow"
            />
            <button
                className="border p-2 rounded-md hover:bg-gray-200 transition-all hover:cursor-pointer flex items-center gap-2"
                onClick={onClearFilters}
            >
                <FilterX className="size-4" />
                <span>Clear Filters</span>
            </button>
        </div>
    );
};

export default Filters;
