import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";
import React, { useEffect, useMemo, useState } from "react";

const Pagination = ({ totalPages }) => {
    const pageNumbers = [];
    const [searchParams] = useSearchParams();
    const memoizedSearchParams = useMemo(() => searchParams, [searchParams]);
    const [currentPage, setCurrentPage] = useState(
        parseInt(memoizedSearchParams.get("page")) || 1
    );

    const location = useLocation();
    const navigate = useNavigate();

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const newSearchParams = new URLSearchParams(
            memoizedSearchParams.toString()
        );
        if (currentPage > 1) {
            newSearchParams.set("page", currentPage);
        } else {
            newSearchParams.delete("page");
        }
        navigate(`${location.pathname}?${newSearchParams.toString()}`, {
            replace: true,
        });
    }, [memoizedSearchParams, currentPage, navigate, location.pathname]);

    return (
        <div className="flex items-center justify-center gap-2 mt-auto">
            <button
                className="border p-2 rounded-md hover:bg-gray-200 transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                &laquo; Previous
            </button>

            {pageNumbers.map((number) => (
                <button
                    key={number}
                    className={cn(
                        "border px-3 py-2 rounded-md hover:bg-gray-200 transition-all hover:cursor-pointer",
                        currentPage === number ? "bg-blue-600 text-white" : ""
                    )}
                    onClick={() => handlePageClick(number)}
                >
                    {number}
                </button>
            ))}

            <button
                className="border p-2 rounded-md hover:bg-gray-200 transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
            >
                Next &raquo;
            </button>
        </div>
    );
};

export default Pagination;
