import { orderBy } from "lodash";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import ReservationItem from "./ReservationItem";

const ReservationList = ({ reservations, filters }) => {
    const [searchParams] = useSearchParams();
    const memoizedSearchParams = useMemo(() => searchParams, [searchParams]);
    const currentPage = parseInt(memoizedSearchParams.get("page")) || 1;
    const pageSize = 5;

    const filteredReservations = useMemo(() => {
        let filtered = reservations;

        // Apply filters
        if (filters.status) {
            filtered = filtered.filter((res) => res.status === filters.status);
        }
        if (filters.date) {
            filtered = filtered.filter(
                (res) => res.businessDate === filters.date
            );
        }
        if (filters.shift) {
            filtered = filtered.filter((res) => res.shift === filters.shift);
        }
        if (filters.area) {
            filtered = filtered.filter((res) => res.area === filters.area);
        }

        const search = memoizedSearchParams.get("search");

        if (search) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter((res) =>
                `${res.customer.firstName} ${res.customer.lastName}`
                    .toLowerCase()
                    .includes(searchLower)
            );
        }

        const sortField = memoizedSearchParams.get("field");
        const sortOrder = memoizedSearchParams.get("order");

        if (sortField) {
            filtered = orderBy(filtered, [sortField], [sortOrder]);
        }

        return filtered;
    }, [reservations, filters, memoizedSearchParams]);

    const totalReservations = filteredReservations.length;
    const totalPages = Math.ceil(totalReservations / pageSize);

    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

    const paginatedReservations = useMemo(() => {
        const startIndex = (validCurrentPage - 1) * pageSize;
        return filteredReservations.slice(startIndex, startIndex + pageSize);
    }, [filteredReservations, validCurrentPage, pageSize]);

    return (
        <div className="flex flex-col gap-6 h-full w-full">
            <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:flex-wrap w-full gap-4 md:gap-3">
                {paginatedReservations.length > 0 ? (
                    paginatedReservations.map((res) => (
                        <ReservationItem key={res.id} reservation={res} />
                    ))
                ) : (
                    <p>No reservations found.</p>
                )}
            </div>
            {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </div>
    );
};

export default ReservationList;
