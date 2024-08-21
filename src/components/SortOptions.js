import { ArrowDownUp, SortAsc, SortDesc } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { cn } from "../lib/utils";

const SortOptions = ({ className }) => {
    const [searchParams] = useSearchParams();
    const memoizedSearchParams = useMemo(() => searchParams, [searchParams]);
    const navigate = useNavigate();
    const location = useLocation();
    const [sort, setSort] = useState({
        field: memoizedSearchParams.get("field") || "",
        order: memoizedSearchParams.get("order") || "",
    });

    useEffect(() => {
        const newSearchParams = new URLSearchParams(
            memoizedSearchParams.toString()
        );
        if (!sort.field && !sort.order) {
            newSearchParams.delete("field");
            newSearchParams.delete("order");
        } else {
            if (sort.field) {
                newSearchParams.set("field", sort.field);
            } else {
                newSearchParams.delete("field");
            }
            if (sort.order) {
                newSearchParams.set("order", sort.order);
            } else {
                newSearchParams.delete("order");
            }
        }
        navigate(`${location.pathname}?${newSearchParams.toString()}`, {
            replace: true,
        });
    }, [memoizedSearchParams, sort, navigate, location.pathname]);

    const handleSort = (field) => {
        setSort({
            field: sort.order === "desc" ? null : field,
            order:
                sort.order === "asc"
                    ? "desc"
                    : sort.order === "desc"
                    ? null
                    : "asc",
        });
    };

    return (
        <div
            className={cn(
                "flex items-center justify-start gap-2 flex-wrap",
                className
            )}
        >
            <button
                onClick={() => handleSort("customer.firstName")}
                className="rounded-lg p-2 shadow bg-blue-600 text-white flex items-center gap-2"
            >
                {sort.order === "asc" && sort.field === "customer.firstName" ? (
                    <SortAsc />
                ) : sort.order === "desc" &&
                  sort.field === "customer.firstName" ? (
                    <SortDesc />
                ) : (
                    <ArrowDownUp />
                )}
                <span>Name</span>
            </button>
            <button
                onClick={() => handleSort("quantity")}
                className="rounded-lg p-2 shadow bg-blue-600 text-white flex items-center gap-2"
            >
                {sort.order === "asc" && sort.field === "quantity" ? (
                    <SortAsc />
                ) : sort.order === "desc" && sort.field === "quantity" ? (
                    <SortDesc />
                ) : (
                    <ArrowDownUp />
                )}
                <span>Guest Number</span>
            </button>
        </div>
    );
};

export default SortOptions;
