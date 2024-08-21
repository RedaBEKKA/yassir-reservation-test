import debounce from "lodash.debounce";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "./ui/input";

const SearchInput = ({ className }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState(searchParams.get("search") || "");

    const memoizedSearchParams = useMemo(() => searchParams, [searchParams]);

    useEffect(() => {
        const currentSearch = memoizedSearchParams.get("search");
        if (currentSearch !== search) {
            const newSearchParams = new URLSearchParams(
                memoizedSearchParams.toString()
            );
            newSearchParams.set("search", search);
            navigate(`${location.pathname}?${newSearchParams.toString()}`, {
                replace: true,
            });
        }
    }, [search, memoizedSearchParams, navigate, location]);

    const handleChange = debounce((e) => {
        setSearch(e.target.value);
    }, 300);

    return (
        <Input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className={className}
            defaultValue={search}
        />
    );
};

export default SearchInput;
